import React from "react";
import Botondownload from "../Components/Botondownload";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import FormApp from "../Components/FormApp";
import TextContainers from "../Components/TextContainers";
import Sucursals from "../Components/sucursals";

export default function Landing() {
  // Code
  return (
    <React.Fragment>
      <Hero />
      {/* Text Containers: Brandon */}
      <TextContainers />
      {/* Carousel: Ramón */}
      <section></section>
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
