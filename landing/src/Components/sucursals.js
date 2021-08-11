import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const UseStyles = makeStyles((theme) => ({
  sucursalContainer: {
    textAlign: "center",
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sucursalCards: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(370px,1fr))",
  },
}));

export default function sucursals() {
  const classes = UseStyles();

  return (
    <section className={classes.sucursalContainer}>
      <h2>Sucursales y Cedis</h2>
      <div className={classes.sucursalCards}></div>
    </section>
  );
}
