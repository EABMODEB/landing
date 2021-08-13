import React from "react";
import Botondownload from "../Components/Botondownload";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import FormApp from "../Components/FormApp";
import Carousel from "../Components/Carousel";
import TextContainers from "../Components/TextContainers";
import Sucursals from "../Components/sucursals";
import Swal from "sweetalert2";

export default function Landing() {
  // Code
  Swal.fire({
    title: "¡Sitio en mantenimiento!",
    text: "Disculpe las molestias, estamos mejorando esta página.",
    icon: "info",
    confirmButtonText: "Continuar",
    width: 320,
    padding: "0 0 20px",
    confirmButtonColor: "#3fc3ee",
  });

  return (
    <React.Fragment>
      <Hero />
      {/* Text Containers: Brandon */}
      <TextContainers />
      {/* Carousel: Ramón */}
      <section>
        <Carousel />
      </section>
      {/* Hover images: Brandon */}
      <Sucursals />
      {/* Button: Joel */}
      <Botondownload />
      {/* Form: Joel */}
      <FormApp />
      {/* Footer: Brandon */}
      <Footer />
    </React.Fragment>
  );
}
