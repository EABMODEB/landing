import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    padding: "40px 20px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  boxTitle: {
    color: theme.palette.text.primary,
    fontSize: "4rem",
    fontWeight: "bold",
    padding: "20px",
    width: "50%",
    minWidth: 425,
  },
  boxBox: {
    padding: "20px",
    width: "50%",
    border: `3px solid ${theme.palette.secondary.main}`,
    minWidth: 425,
  },
  boxBoxTitle: {
    color: theme.palette.secondary.main,
    fontSize: "3rem",
    padding: "20px",
  },
  boxBoxParagraph: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
    fontSize: "1.6rem",
  },
}));

export default function TextContainers() {
  const classes = useStyles();

  return (
    <section className={classes.boxContainer}>
      <h2 className={classes.boxTitle}>
        ¡Apasionados por el aprovechamiento al máximo de la naturaleza!
      </h2>
      <div className={classes.boxBox}>
        <h2 className={classes.boxBoxTitle}>
          ¿Quiénes somos en la industria fotovoltáica?
        </h2>
        <p className={classes.boxBoxParagraph}>
          Somos el referente de la distribución más amplio de la industria,
          buscamos transformar a México a través de la energía solar, buscando
          alcanzar día con día nuestro objetivo: entregar diferenciadores que
          apoyen a mejorar el desempeño de los integradores en el mercado.
        </p>
      </div>
    </section>
  );
}
