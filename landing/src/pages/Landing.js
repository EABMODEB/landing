import React from "react";
import Botondownload from "../Components/Botondownload";
import Hero from "../Components/Hero"
import Footer from "../Components/Footer";
import FormApp from "../Components/FormApp";

export default function Landing() {
  // Code
  return (
    <React.Fragment>
      {/* Hero: Ramón */}
      <section><Hero/></section>
      {/* Text Containers: Brandon */}
      <section></section>
      {/* Carousel: Ramón */}
      <section></section>
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
