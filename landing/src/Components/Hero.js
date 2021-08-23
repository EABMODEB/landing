import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	slideText: {
		backgroundColor: "rgba(255, 128, 0, 1)",
		background:
			" -webkit-linear-gradient(90deg, rgba(255,189,51,1) 10%, rgba(255,128,0,1) 100%) , linear-gradient(90deg, rgba(255,189,51,1) 10%, rgba(255,128,0,1) 100%)",
		backgroundImage:
			"-webkit-gradient(linear, left top, left bottom, from(rgba(255,189,51,1)), to(rgba(255,128,0,1)))",
		fontSize: "2rem",
		"-webkit-background-clip": "text",
		"-webkit-text-fill-color": "transparent",
		textAlign: "center",
		padding: "1rem",
		display: "flex",
		textShadow: "1px 5px 80px rgba(255,255,250, 0.9)",
		flexDirection: "column",
		fontWeight: "900",
		textTransform: "uppercase",
		lineHeight: "initial",
		letterSpacing: "2px",
		[theme.breakpoints.up("sm")]: {
			fontSize: "3rem",
			padding: "2rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "4rem",
			padding: "3rem",
		},
	},
	slideTextContainer: {
		height: "100%",
		width: "100%",
		maxWidth: "300px",
		margin: "auto",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			maxWidth: "500px",
		},
		[theme.breakpoints.up("md")]: {
			maxWidth: "600px",
		},
	},
}));

// Images
const slide1 =
	"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide1.jpg?alt=media&token=c2e44767-37f2-41ec-b01f-04c30c128f1b";
const slide2 =
	"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide2.jpg?alt=media&token=b3ff86b9-193a-4730-823b-345c2dab55b6";
const slide3 =
	"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide3.jpg?alt=media&token=5e8fd281-bf4a-451f-98f9-0cecd6a9b3ef";

const Hero = () => {
	const classes = useStyles();
	return (
		<div id="hero">
			<HeroSlider
				slidingAnimation="left_to_right"
				orientation="horizontal"
				initialSlide={1}
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.33)",
					marginTop: "10vh",
				}}
				settings={{
					slidingDuration: 250,
					slidingDelay: 100,
					shouldAutoplay: true,
					shouldDisplayButtons: true,
					autoplayDuration: 5000,
					height: "90vh",
				}}
			>
				<Slide
					background={{
						backgroundImage: slide1,
						backgroundAttachment: "relative",
						filter: "brightness(50%)",
					}}
				>
					<div className={classes.slideTextContainer}>
						<Typography className={classes.slideText} variant="h3">
							Somos el centro de distribución más completo de México.
						</Typography>
					</div>
				</Slide>

				<Slide
					background={{
						backgroundImage: slide2,
						backgroundAttachment: "relative",
						filter: "brightness(50%)",
						backgroundPosition: "center center",
					}}
				>
					<div className={classes.slideTextContainer}>
						<Typography className={classes.slideText} variant="h3">
							Trabajamos solo con las mejores marcas y productos del mercado.
						</Typography>
					</div>
				</Slide>
				<Slide
					background={{
						backgroundImage: slide3,
						backgroundAttachment: "relative",
						filter: "brightness(50%)",
						backgroundPosition: "center center",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div className={classes.slideTextContainer}>
						<Typography className={classes.slideText} variant="h3">
							Estamos trabajando para ti, algo nuevo te sorprenderá.
						</Typography>
					</div>
				</Slide>

				<Nav />
			</HeroSlider>
		</div>
	);
};

export default Hero;
