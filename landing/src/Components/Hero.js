import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    slideText: {
        color: theme.palette.text.light,
        fontSize: '1.8rem',
        textAlign: 'center',
        padding: '.5rem',
        border: '1px solid',
        display: 'flex',
        textShadow: '1px 1px 100px black',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.8rem',
            padding: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3.8rem',
            padding: '2.5rem'
        },
    },
    slideTextContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

// Images
const slide1 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide1.jpg?alt=media&token=c2e44767-37f2-41ec-b01f-04c30c128f1b";
const slide2 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide2.jpg?alt=media&token=b3ff86b9-193a-4730-823b-345c2dab55b6";
const slide3 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide3.jpg?alt=media&token=5e8fd281-bf4a-451f-98f9-0cecd6a9b3ef";

const Hero = () => {
    const classes = useStyles();
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)",
                marginTop:'10vh'
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "90vh"
            }}
        >

            <Slide
                background={{
                backgroundImage: slide1,
                backgroundAttachment: "relative",
                filter: 'brightness(50%)',
                }}
            >
                <div className={classes.slideTextContainer}>
                    <Typography className={classes.slideText} variant="h3">
                        <b>¡ACTUA AHORA!</b>
                        ES MOMENTO DE SER PARTE DEL<br/>
                        <b>MOVIMIENTO SOLAR</b>
                    </Typography>
                </div>
            </Slide>

            <Slide
                background={{
                backgroundImage: slide2,
                backgroundAttachment: "relative",
                filter: 'brightness(50%)',
                backgroundPosition: 'center center',
                }}
            >
                <div className={classes.slideTextContainer}>
                    <Typography className={classes.slideText} variant="h3">
                        <b>TENEMOS</b>
                        SÓLO LAS MEJORES<br/>
                        <b>MARCAS Y PRODUCTOS</b>
                    </Typography>
                </div>
            </Slide>

            <Slide
                background={{
                backgroundImage: slide3,
                backgroundAttachment: "relative",
                filter: 'brightness(50%)',
                backgroundPosition: 'center center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
                }}
            >
                <div className={classes.slideTextContainer}>
                    <Typography className={classes.slideText} variant="h3">
                        <b>SOMOS</b>
                        EL CENTRO DE<br/>
                        <b>DISTRIBUCIÓN SOLAR</b>
                    </Typography>
                </div>
            </Slide>

            <Nav />
        </HeroSlider>
    );
};

export default Hero;
