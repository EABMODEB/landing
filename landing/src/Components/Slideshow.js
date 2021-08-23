import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as FlechaIzquierda } from "../assets/svg/arrow-left.svg";
import { ReactComponent as FlechaDerecha } from "../assets/svg/arrow-right.svg";
import styled from "styled-components";

const Slideshow = ({
	children,
	autoplay = true,
	velocidad = "500",
	intervalo = "1000",
	right = true,
	controles = true,
}) => {
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
						anterior();
					}, intervalo);
				});
			}
		}
	}, [autoplay, intervalo, siguiente, anterior, right]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
			{controles && (
				<Controles>
					<Boton onClick={anterior}>
						<FlechaIzquierda />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<FlechaDerecha />
					</Boton>
				</Controles>
			)}
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

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: 0.3s ease all;

	path {
		fill: #000;
		opacity: 0.5;
	}
	&:hover {
		path {
			fill: #000;
			opacity: 1;
			drop-shadow(1 1px 1px #000);
		}
		${(props) =>
			props.derecho
				? `background: linear-gradient(to left, rgba(218, 227,229, 1) 50%, rgba(255, 255, 255, 0) 100%)`
				: `background: linear-gradient(to right, rgba(218, 227,229, 1) 50%, rgba(255, 255, 255, 0) 100%)`}
	}
	${(props) => (props.derecho ? `right: -5px;` : `left: -5px;`)}
`;

const Slide = styled.div`
	min-width: 100%;
	transition: 0.3s ease all;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;

	img {
		box-sizing: content-box;
		height: 100px;
		max-height: 40px;
		object-fit: cover;
	}

	img.short {
		max-height: 30px;
	}

	img.shorter {
		max-height: 25px;
	}
`;

export { Slideshow, Slide };
