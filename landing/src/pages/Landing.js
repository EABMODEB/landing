import React from "react";
import Botondownload from "../Components/Botondownload";
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import FormApp from "../Components/FormApp";
import Carousel from "../Components/Carousel"

export default function Landing() {
  // Code
  return (
    <React.Fragment>
      {/* Hero: Ramón */}
      <section><Hero/></section>
      {/* Text Containers: Brandon */}
      <section></section>
      {/* Carousel: Ramón */}
      <section><Carousel/></section>
      {/* Hover images: Brandon */}
      <section></section>
      {/* Button: Joel */}
      <Botondownload />
      {/* Form: Joel */}
      <FormApp />
      {/* Footer: Brandon */}
      <Footer />
    </React.Fragment>
  );
}
