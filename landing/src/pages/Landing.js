import React from "react";
import Botondownload from "../Components/Botondownload";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import FormApp from "../Components/FormApp";
import Carousel from "../Components/Carousel";
import TextContainers from "../Components/TextContainers";
import Sucursals from "../Components/sucursals";
import Swal from "sweetalert2";
import Header from "../Components/Header";
export default function Landing() {
	
	// Code
	window.onload = () => {
		var hero = document.getElementById("hero");
		document.addEventListener("scroll", scrollHandler);
	};

	const scrollHandler = () => {
		let currentScroll = window.pageYOffset;
		let heroTop = window.hero.offsetHeight;
		if (currentScroll > heroTop) {
			Swal.fire({
				customClass: {
					title: "swal-title",
					confirmButton: "swal-button-text",
					htmlContainer: "swal-text",
				},
				title: "¡Sitio en mantenimiento!",
				text: "Disculpe las molestias, estamos mejorando esta página.",
				icon: "info",
				confirmButtonText: "Continuar",
				width: 450,
				padding: "0 0 20px",
				confirmButtonColor: "#3fc3ee",
			});
			document.removeEventListener("scroll", scrollHandler);
		}
	};

	return (
		<React.Fragment>
			<Header />
			<Hero />
			{/* Text Containers: Brandon */}
			<TextContainers />
			{/* Carousel: Ramón */}
			<Sucursals />
			{/* Hover images: Brandon */}
			<Carousel />
			{/* Button: Joel */}
			<Botondownload />
			{/* Form: Joel */}
			<FormApp />
			{/* Footer: Brandon */}
			<Footer />
		</React.Fragment>
	);
}
