import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerImgContainer: {
    height: "200px",
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  footerImg: {
    height: "100%",
  },
  footerListContainer: {
    width: "40%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerList: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  footerListAnchor: {
    color: theme.palette.text.light,
    textDecoration: "none",
    fontSize: 16,
    "&:hover": {
      color: "white",
      textDecoration: "underline",
    },
  },
  footerUbication: {
    color: theme.palette.text.light,
    fontSize: 16,
    textAlign: "center",
    width: 250,
  },
  footerIconsContainer: {
    width: "10%",
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerIcon: {
    color: "white",
    height: 50,
    width: 50,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerImgContainer}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FRecurso%204.png?alt=media&token=68174d8e-0fc8-4ea8-b8bf-eb0bb377f00c"
          alt="Footer Logo"
          className={classes.footerImg}
        />
      </div>
      <ul className={classes.footerListContainer}>
        <li className={classes.footerList}>
          <a href="#" className={classes.footerListAnchor}>
            Aviso de privacidad
          </a>
          <a href="#" className={classes.footerListAnchor}>
            Política de garantías
          </a>
          <a href="#" className={classes.footerListAnchor}>
            Política de devoluciones
          </a>
          <a href="#" className={classes.footerListAnchor}>
            Política de envíos
          </a>
        </li>
        <p className={classes.footerUbication}>
          Matriz: Av. Industria Eléctrica 43-A Parque Industrial Bugambilias,
          Tlajomulco de Zúñiga.
        </p>
      </ul>

      <div className={classes.footerIconsContainer}>
        <FacebookIcon className={classes.footerIcon} />
        <InstagramIcon className={classes.footerIcon} />
        <WhatsAppIcon className={classes.footerIcon} />
      </div>
    </footer>
  );
}
