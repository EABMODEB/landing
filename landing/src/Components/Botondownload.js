import React from "react";
import Lottie from "lottie-react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
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
  textbutton: {
    color: "white",
    textDecoration: "none",
  },
  button: {
    backgroundImage:
      "linear-gradient(90deg, rgba(255,189,51,1) 0%, rgba(255,128,0,1) 100%), linear-gradient(90deg, rgba(255,189,51,1) 0%, rgba(255,128,0,1) 100%)",
    margin: theme.spacing(2, 0),
    borderRadius: "50px",
    padding: "10px 30px",
    color: "white",
    border: "double 5px transparent",
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
    padding: "1rem",
  },
  icons: {
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
  textIcon: {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: "1.4rem",
  },
}));

const iconsImages = {
  img1: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_calidad.png?alt=media&token=b6e8de5c-78e3-442b-a265-9ff07bffa75d",
  img2: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_comercial.png?alt=media&token=127d4f77-da07-473f-bc90-342714909621",
  img3: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_entregas.png?alt=media&token=72dbb923-274d-4770-bc33-c074ba78ca88",
  img4: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_garantias.png?alt=media&token=1195040e-9cf9-4565-adb3-62e1f6f296eb",
  img5: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_soporte.png?alt=media&token=e13829a5-44b3-4b64-9251-9bda49e5456e",
  img6: "https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2Ficonos%20SC_stock.png?alt=media&token=f637799c-b6c8-4b89-a31a-66dc233c44af",
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
            <Typography className={classes.textIcon}>
              Equipos de primera calidad
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img2}
              alt="Calidad Icon"
            />
            <Typography className={classes.textIcon}>
              Capacitación comercial
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img3}
              alt="Calidad Icon"
            />
            <Typography className={classes.textIcon}>
              Entregas inmediatas
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img4}
              alt="Calidad Icon"
            />
            <Typography className={classes.textIcon}>
              Garantía de producto
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img5}
              alt="Calidad Icon"
            />
            <Typography className={classes.textIcon}>
              Asesoría y soporte técnico
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              className={classes.icons}
              src={iconsImages.img6}
              alt="Calidad Icon"
            />
            <Typography className={classes.textIcon}>
              Stock siempre disponible
            </Typography>
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
          <a
            className={classes.textbutton}
            href="https://solar-center.mx/Catalogo2021.pdf"
          >
            Descarga aquí
          </a>
        </Button>
      </div>
    </div>
  );
}
