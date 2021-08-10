import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "rgb(255,189,51)",
    background: "linear-gradient(90deg, rgba(255,189,51,1) 0%, rgba(255,128,0,1) 100%)",
    margin: theme.spacing(1),
    borderRadius: "50px",
    padding: "10px 30px",
    border: "double 3px white",
    color: "white",

  },
  buttoncontainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
  }
}));

export default function Botondownload () {
  const classes = useStyles();
  
  return (
    <div className={classes.buttoncontainer}>
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
  );
}