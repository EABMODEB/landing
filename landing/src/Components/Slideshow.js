import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

const Slideshow = ({ children, autoplay = true, velocidad = "500", intervalo = "500", right = true }) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current.children.length > 0) {
			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = "none";
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener("transitionend", transicion);
			};

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener("transitionend", transicion);
		}
	}, [velocidad]);

	const anterior = () => {
		if (slideshow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = "none";
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	useEffect(() => {
		if (autoplay) {
			if (right) {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);

				// Eliminamos los intervalos
				slideshow.current.addEventListener("mouseenter", () => {
					clearInterval(intervaloSlideshow.current);
				});

				// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
				slideshow.current.addEventListener("mouseleave", () => {
					intervaloSlideshow.current = setInterval(() => {
						siguiente();
					}, intervalo);
				});
			} else {
				intervaloSlideshow.current = setInterval(() => {
					anterior();
				}, intervalo);

				// Eliminamos los intervalos
				slideshow.current.addEventListener("mouseenter", () => {
					clearInterval(intervaloSlideshow.current);
				});

				// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
				slideshow.current.addEventListener("mouseleave", () => {
					intervaloSlideshow.current = setInterval(() => {
						siguiente();
					}, intervalo);
				});
			}
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
		</ContenedorPrincipal>
	);
};

const ContenedorPrincipal = styled.div`
	position: relative;
	width: 100%;
	max-width: 1200px;
	margin: 20px auto;
	overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
	width: 25%;

	@media (max-width: 424px) {
		width: 100%;
		max-width: none;
	}

	@media (max-width: 767px) and (min-width: 425px) {
		width: 50%;
		max-width: none;
	}

	@media (min-width: 767px) and (max-width: 1023px) {
		width: 33%;
		max-width: none;
	}
`;

const Slide = styled.div`
	min-width: 100%;
	transition: 0.3s ease all;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	img {
		max-width: 100%;
		max-height: 100px;
		object-fit: cover;
		padding: 20px;
	}
`;

export { Slideshow, Slide };
