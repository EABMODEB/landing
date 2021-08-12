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
    transition: "all .5s ease-in-out",
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
    transition: "opacity .5s",
    "&:hover": {
      opacity: 1,
    },
  },
  cardText: {
    color: theme.palette.secondary.main,
    fontSize: "clamp(2rem, 3.3vw, 3rem)",
  },
}));

export default function sucursals() {
  const classes = UseStyles();

  return (
    <section className={classes.sucursalContainer}>
      <h2>Sucursales y Cedis</h2>
      <div className={classes.sucursalCards}>
        <div className={classes.cardContainer}>
          <img
            className={classes.cardImg}
            src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fqro%20copia.jpg?alt=media&token=30820061-c29c-4fbc-b6b7-f3858c4937d4"
            alt="Querétaro"
          />
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardText}>Querétaro</h3>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <img
            className={classes.cardImg}
            src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fmty%20copia.jpg?alt=media&token=fd1dd121-81f9-4ce9-b92a-4c7f7a829a1d"
            alt="Monte Rey"
          />
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardText}>Monte Rey</h3>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <img
            className={classes.cardImg}
            src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fmerida%20copia.jpg?alt=media&token=4ec975d4-88e7-4f90-b449-f9b191926618"
            alt="Merida"
          />
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardText}>Merida</h3>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <img
            className={classes.cardImg}
            src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fguadalajara%20copia.jpg?alt=media&token=327c4613-96f6-49f0-873e-9a1ee57e29fa"
            alt="Guadalajara"
          />
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardText}>Guadalajara</h3>
          </div>
        </div>
        <div className={classes.cardContainer}>
          <img
            className={classes.cardImg}
            src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2Fcdmx%20copia.jpg?alt=media&token=1c1dbe88-58a2-42c9-8402-e8a925501f62"
            alt="Ciudad de México"
          />
          <div className={classes.cardTextContainer}>
            <h3 className={classes.cardText}>Ciudad de México</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
