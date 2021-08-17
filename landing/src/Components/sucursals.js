import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
	sucursalContainer: {
		textAlign: "center",
		width: "100%",
		maxWidth: 1240,
		margin: "0 auto",
	},
	sucursalCards: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row",
		},
	},
	cardContainer: {
		width: "100%",
		position: "relative",
		[theme.breakpoints.up("sm")]: {
			width: "50%",
		},
		[theme.breakpoints.up("md")]: {
			width: "33%",
		},
		"&:hover img": {
			filter: "brightness(0.5)",
		},
	},
	cardImg: {
		height: "100%",
		width: "100%",
		transition: "all .3s ease-in-out",
	},
	cardTextContainer: {
		width: "100%",
		height: "100%",
		opacity: 0,
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
		padding: "5px",
		transition: "opacity .3s",
		"&:hover": {
			opacity: 1,
		},
	},
	cardText: {
		color: theme.palette.secondary.main,
		fontSize: "clamp(2rem, 3.3vw, 3rem)",
	},
	textosupremo: {
		fontSize: '3rem !important',
	},
}));

export default function sucursals() {
	const classes = UseStyles();

	return (
		<section className={classes.sucursalContainer}>
			<h2 className= {classes.textosupremo}>Sucursales y Cedis</h2>
			<div className={classes.sucursalCards}>
				<div className={classes.cardContainer}>
					<img
						className={classes.cardImg}
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FGuadalajara.jpg?alt=media&token=a52c065c-2a9d-4a03-a574-1fa627992dc6"
						alt="Guadalajara"
					/>
					<div className={classes.cardTextContainer}>
						<h3 className={classes.cardText}>Guadalajara</h3>
					</div>
				</div>
				<div className={classes.cardContainer}>
					<img
						className={classes.cardImg}
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FMonterey.jpg?alt=media&token=9dd9f805-db29-4981-bb90-67456410659b"
						alt="Monterrey"
					/>
					<div className={classes.cardTextContainer}>
						<h3 className={classes.cardText}>Monterrey</h3>
					</div>
				</div>
				<div className={classes.cardContainer}>
					<img
						className={classes.cardImg}
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FQueretaro.jpg?alt=media&token=46e5666d-d4a4-4d25-8ba8-88814558ef8a"
						alt="Querétaro"
					/>
					<div className={classes.cardTextContainer}>
						<h3 className={classes.cardText}>Querétaro</h3>
					</div>
				</div>
				<div className={classes.cardContainer}>
					<img
						className={classes.cardImg}
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FCMDX.jpg?alt=media&token=ccd3b886-5361-4ef9-a35b-fa06fe556abc"
						alt="Ciudad de México"
					/>
					<div className={classes.cardTextContainer}>
						<h3 className={classes.cardText}>Ciudad de México</h3>
					</div>
				</div>
				<div className={classes.cardContainer}>
					<img
						className={classes.cardImg}
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FMerida.jpg?alt=media&token=7a5e0b03-7af0-4adc-8abc-152f71cfffc8"
						alt="Merida"
					/>
					<div className={classes.cardTextContainer}>
						<h3 className={classes.cardText}>Merida</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
