import { makeStyles } from "@material-ui/core/styles";
import "./Styles/Carousel.css";
import { Typography } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
	carouselTitle: {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: "1rem",
		fontSize: "3rem !important",
	},
	carouselImg: {
		width: "200px",
		height: "150px",
		objectFit: "contain",
		alignItems: "flex-start",
	},
}));

export default function Hero() {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		draggable: false,
		//centerMode: true,
		//centerPadding: "-0px",
	};
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h5" className={classes.carouselTitle}>
				¿Con quiénes trabajamos?
			</Typography>
			<Slider {...settings}>
				<div>
					<img
						className={classes.carouselImg}
						alt="Seraphim"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSeraphim.png?alt=media&token=0e1255f3-9c60-4d58-acc2-c7e921638510"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="ET Solar"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20ET.png?alt=media&token=594d8b32-4583-41be-bc21-d944ca167506"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Fronius"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Fronius-01.png?alt=media&token=dd19c8ee-1099-4955-9bd9-89c297ac823c"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Hoymiles"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FHoymiles-01.png?alt=media&token=a950c5de-4a09-4cd0-8657-bc8d425f707f"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Longi"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Flongi-logo%20copia.png?alt=media&token=be3d3633-841e-496b-a2af-56a30d9b6701"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Solis"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Solis.png?alt=media&token=143f90f3-d271-4ad7-a893-04134620d321"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Enpahse"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FEmphase.png?alt=media&token=2c8892f4-c2db-43c5-a90f-5a33f4a9043b"
					/>
				</div>
			</Slider>
			<Slider {...settings}>
				<div>
					<img
						className={classes.carouselImg}
						alt="Yassion"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FYassion-01.png?alt=media&token=31d2c24c-c51f-4aa7-b2e6-dccde894e83d"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="SRNE"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSRNE.png?alt=media&token=8e44b8d9-64f7-4aed-889a-85962cb45d18"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Beny"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FZJ%20Beny.png?alt=media&token=6079ec17-83cb-461a-b20f-b09910451823"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Pylotech"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Fpylontech.png?alt=media&token=b9c57570-e8b0-4942-ad89-d53f08ab2e0a"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Shurflo"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Shurflo.png?alt=media&token=c2ecf8a5-8277-4543-9bd8-6d5a18800d21"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="QXPV"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20QXPV.png?alt=media&token=effec7f3-8fcf-48e4-885c-d84a2d2011a5"
					/>
				</div>
				<div>
					<img
						className={classes.carouselImg}
						alt="Parts Master"
						src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Parts%20Master.png?alt=media&token=6b9680ce-0efa-47c4-9e67-78bcc8176882"
					/>
				</div>
			</Slider>
		</div>
	);
}
