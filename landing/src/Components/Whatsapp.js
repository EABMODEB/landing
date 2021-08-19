import React from "react";
import WhatsAppSvg from "../assets/svg/WhatsApp.svg";
import "./Styles/Whatsapp.css";

export default function Whatsapp() {
	return (
		<a href="https://wa.link/9dkxw0">
			<img className="fixed__whatsapp" src={WhatsAppSvg} alt="Whatsapp" />
		</a>
	);
}
