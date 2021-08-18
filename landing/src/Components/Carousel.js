import React, { Fragment } from "react";
import { Slideshow, Slide } from "./Slideshow";

const img1 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSeraphim.png?alt=media&token=0e1255f3-9c60-4d58-acc2-c7e921638510",
	img2 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20ET.png?alt=media&token=594d8b32-4583-41be-bc21-d944ca167506",
	img3 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Fronius-01.png?alt=media&token=dd19c8ee-1099-4955-9bd9-89c297ac823c",
	img4 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FHoymiles-01.png?alt=media&token=a950c5de-4a09-4cd0-8657-bc8d425f707f",
	img5 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Flongi-logo%20copia.png?alt=media&token=be3d3633-841e-496b-a2af-56a30d9b6701",
	img6 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Solis.png?alt=media&token=143f90f3-d271-4ad7-a893-04134620d321",
	img7 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FEmphase.png?alt=media&token=2c8892f4-c2db-43c5-a90f-5a33f4a9043b",
	img8 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FYassion-01.png?alt=media&token=31d2c24c-c51f-4aa7-b2e6-dccde894e83d",
	img9 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSRNE.png?alt=media&token=8e44b8d9-64f7-4aed-889a-85962cb45d18",
	img10 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FZJ%20Beny.png?alt=media&token=6079ec17-83cb-461a-b20f-b09910451823",
	img11 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Fpylontech.png?alt=media&token=b9c57570-e8b0-4942-ad89-d53f08ab2e0a",
	img12 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Shurflo.png?alt=media&token=c2ecf8a5-8277-4543-9bd8-6d5a18800d21",
	img13 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20QXPV.png?alt=media&token=effec7f3-8fcf-48e4-885c-d84a2d2011a5",
	img14 =
		"https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Parts%20Master.png?alt=media&token=6b9680ce-0efa-47c4-9e67-78bcc8176882";

const Carousel = () => {
	return (
		<Fragment>
			<Slideshow autoplay={true} intervalo="5000" right={true}>
				<Slide>
					<img src={img1} alt="Seraphim" />
				</Slide>
				<Slide>
					<img src={img2} alt="ET Solar" />
				</Slide>
				<Slide>
					<img src={img3} alt="Fronius" />
				</Slide>
				<Slide>
					<img src={img4} alt="Hoymiles" />
				</Slide>
				<Slide>
					<img src={img5} alt="Longi" />
				</Slide>
				<Slide>
					<img src={img6} alt="Solis" />
				</Slide>
				<Slide>
					<img src={img7} alt="Enpahse" />
				</Slide>
			</Slideshow>
			<Slideshow autoplay={true} intervalo="5000" right={false}>
				<Slide>
					<img src={img8} alt="Yassion" />
				</Slide>
				<Slide>
					<img src={img9} alt="SRNE" />
				</Slide>
				<Slide>
					<img src={img10} alt="Beny" />
				</Slide>
				<Slide>
					<img src={img11} alt="Pylotech" />
				</Slide>
				<Slide>
					<img src={img12} alt="Shurflo" />
				</Slide>
				<Slide>
					<img src={img13} alt="QXPV" />
				</Slide>
				<Slide>
					<img src={img14} alt="Parts Master" />
				</Slide>
			</Slideshow>
			{/* <Slideshow>
				<Slide>
					<img src={img1} alt="" />
				</Slide>
				<Slide>
					<img src={img2} alt="" />
				</Slide>
			</Slideshow> */}
		</Fragment>
	);
};

export default Carousel;

// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FEmphase.png?alt=media&token=2c8892f4-c2db-43c5-a90f-5a33f4a9043b"
// 				/>
// 			</Slider>
// 			<Slider className={classes.sliderContainer} {...settings}>
// 				<img
// 					className={classes.carouselImg}
// 					alt="Yassion"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FYassion-01.png?alt=media&token=31d2c24c-c51f-4aa7-b2e6-dccde894e83d"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="SRNE"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FSRNE.png?alt=media&token=8e44b8d9-64f7-4aed-889a-85962cb45d18"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="Beny"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FZJ%20Beny.png?alt=media&token=6079ec17-83cb-461a-b20f-b09910451823"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="Pylotech"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Fpylontech.png?alt=media&token=b9c57570-e8b0-4942-ad89-d53f08ab2e0a"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="Shurflo"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Shurflo.png?alt=media&token=c2ecf8a5-8277-4543-9bd8-6d5a18800d21"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="QXPV"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20QXPV.png?alt=media&token=effec7f3-8fcf-48e4-885c-d84a2d2011a5"
// 				/>
// 				<img
// 					className={classes.carouselImg}
// 					alt="Parts Master"
// 					src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FLogo%20Parts%20Master.png?alt=media&token=6b9680ce-0efa-47c4-9e67-78bcc8176882"
// 				/>
// 			</Slider>
// 		</div>
// 	);
// }
