import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import { Typography } from "@material-ui/core";

// Images
const slide1 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide1.jpg?alt=media&token=c2e44767-37f2-41ec-b01f-04c30c128f1b";
const slide2 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide2.jpg?alt=media&token=b3ff86b9-193a-4730-823b-345c2dab55b6";
const slide3 = "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fslide3.jpg?alt=media&token=5e8fd281-bf4a-451f-98f9-0cecd6a9b3ef";

const app = () => {
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
                backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "95vh"
            }}
        >

            <Slide
                background={{
                backgroundImage: slide1,
                backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                backgroundImage: slide2,
                backgroundAttachment: "fixed"
                }}
            />

            <Slide
                background={{
                backgroundImage: slide3,
                backgroundAttachment: "fixed",
                backgroundPosition: 'center center'
                }}
            />

            <Nav />
        </HeroSlider>
    );
};

export default app;
