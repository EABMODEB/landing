import React from "react";
import Lottie from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import Animation from "../json/animation.json";

const useStyles = makeStyles((theme) => ({
	wrapperContainer: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		placeItems: "center center",
		margin: "20px auto",
		padding: "20px",
		width: "100%",
		maxWidth: "1200px",
		gap: "20px",
		[theme.breakpoints.down("768")]: {
			gridTemplateColumns: "1fr",
			gridTemplateRows: "auto",
		},
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		fontSize: '2rem !important',
	},
	button: {
		backgroundImage:
			"linear-gradient(90deg, rgba(255,189,51,1) 0%, rgba(255,128,0,1) 100%), linear-gradient(90deg, rgba(255,189,51,1) 0%, rgba(255,128,0,1) 100%)",
		margin: theme.spacing(2, 0),
		borderRadius: "50px",
		padding: "10px 30px",
		border: "double 5px transparent",
		color: "white",
		backgroundOrigin: "border-box",
		backgroundClip: "content-box, border-box",
		boxShadow: "inset 0 0 0 2px white, 0 0 10px 5px rgba(255,149,51,.4)",
		transition: "all .3s",
		"&:hover": {
			boxShadow: "inset 0 0 0 2px white, 0 0 10px 5px rgba(255,149,51,.4)",
			transform: "scale(1.05)",
		},
		animationImg: {
			width: "50%",
		},
	},
}));

export default function Botondownload() {
	const classes = useStyles();

	return (
		<div className={classes.wrapperContainer}>
			<div className={classes.animationImg}>
				<Lottie animationData={Animation} />
			</div>
			<div className={classes.buttonContainer}>
				<h2>¿Quieres conocer nuestro catálogo?</h2>
				<h2>¡Da click aquí</h2>
				<Button variant="contained" color="black" className={classes.button} startIcon={<GetAppIcon />}>
					Descarga aquí
				</Button>
			</div>
		</div>
	);
}
