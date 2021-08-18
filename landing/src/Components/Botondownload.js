import React from "react";
import Lottie from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  wrapperContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    placeItems: "center center",
    margin: "20px auto",
    padding: "20px",
    width: "100%",
    maxWidth: "1300px",
    gap: "20px",
    [theme.breakpoints.down("768")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
    },
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem !important",
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
  },
  containerImgs: {
    boxShadow: "1px 1px 20px 5px rgba(255,189,51,1)",
  },
  icons: {
    width: "100%",
  },
}));

const iconsImages = {
  img1: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_calidad.png?alt=media&token=3aa4741a-3ed3-4805-b1f6-8beba82b4a08",
  img2: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_comercial.png?alt=media&token=403e83f9-3f4f-4edb-8991-f1117316c640",
  img3: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_entregas.png?alt=media&token=ec27b648-e971-4ad3-aabb-7ff9286fcc3e",
  img4: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_garantias.png?alt=media&token=840aa064-2d6f-4601-95f5-eeca763f1133",
  img5: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_soporte.png?alt=media&token=7f45ea4d-f580-488a-b343-c3fe1816b823",
  img6: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_stock.png?alt=media&token=c4a71690-b42c-42fb-8c1c-2eb8c5f77eb4",
};

export default function Botondownload() {
  const classes = useStyles();

  return (
    <div className={classes.wrapperContainer}>
      <div className={classes.containerImgs}>
        <Grid container spacing={2} alignContent={"center"}>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img1}
              alt="Calidad Icon"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img2}
              alt="Calidad Icon"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img3}
              alt="Calidad Icon"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img4}
              alt="Calidad Icon"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img5}
              alt="Calidad Icon"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img6}
              alt="Calidad Icon"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.buttonContainer}>
        <h2>¿Quieres conocer nuestro catálogo?</h2>
        <h2>¡Da click aquí</h2>
        <Button
          variant="contained"
          color="black"
          className={classes.button}
          startIcon={<GetAppIcon />}
        >
          Descarga aquí
        </Button>
      </div>
    </div>
  );
}
