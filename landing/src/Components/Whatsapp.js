import React from "react";
import WhatsAppSvg from "../assets/svg/WhatsApp.svg";
import "./Styles/Whatsapp.css";

export default function Whatsapp() {
	return (
		<a href="tel:3325799804">
			<img className="fixed__whatsapp" src={WhatsAppSvg} alt="Whatsapp" />
		</a>
	);
}
