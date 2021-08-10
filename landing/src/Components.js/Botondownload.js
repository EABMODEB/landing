import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  button: {
    background: "rgb(2,0,36)",
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,69,9,1) 35%, rgba(0,212,255,1) 100%)",
    margin: theme.spacing(1),
  },
}));

export default function Botondownload () {
  const classes = useStyles();

  return (
    <div>
        <h2>¿Quieres conocer nuestro catálogo?</h2>
        <h2>¡Da click aquí</h2>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GetAppIcon />}
      >
        Descarga aquí
      </Button>
    </div>
  );
}