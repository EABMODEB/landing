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
    flexDirection: "column",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerIconsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.light,
    padding: 20,
  },
  footerIconAnchor: {
    transition: "all .3s",
    margin: "0 15px",

    "&:hover": {
      transform: "scale(1.3)",
    },
  },
  footerIcon: {
    color: "white",
    height: 50,
    width: 50,
  },
  footerContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateAreas: "'ubication image list'",
    gridTemplateColumns: "1fr 50% 1fr",
    gridTemplateRows: "1fr",
    placeItems: "flex-end center",
    [theme.breakpoints.down("900")]: {
      gridTemplateAreas: "'image image''ubication list'",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "auto",
      placeItems: "center center",
    },
    [theme.breakpoints.down("500")]: {
      gridTemplateAreas: "'image ''ubication''list'",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "auto",
      placeItems: "center center",
    },
  },
  footerImgContainer: {
    width: "100%",
    maxWidth: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gridArea: "image",
    padding: "20px 50px 30px",
    borderBottom: `2px solid ${theme.palette.background.light}`,
  },
  footerImg: {
    width: "100%",
    maxWidth: "100%",
  },
  footerListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    boxSizing: "border-box",
    gridArea: "list",
  },
  footerList: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: 10,
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
  footerUbicationContainer: {
    gridArea: "ubication",
    width: "100%",
    maxWidth: "300px",
  },
  footerUbication: {
    color: theme.palette.text.light,
    fontSize: 16,
    textAlign: "center",
    padding: "20px",
    marginBottom: 10,
  },
  footerLink: {
    textDecoration: "none",
    color: theme.palette.text.light,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerIconsContainer}>
        <a
          className={classes.footerIconAnchor}
          href="https://www.facebook.com/SolarCenterMX/"
          target="_black"
        >
          <FacebookIcon className={classes.footerIcon} />
        </a>
        <a
          className={classes.footerIconAnchor}
          href="https://www.instagram.com/solarcentermx/"
          target="_black"
        >
          <InstagramIcon className={classes.footerIcon} />
        </a>
        {/* <a
          className={classes.footerIconAnchor}
          href="https://wa.link/9dkxw0"
          target="_blank"
        >
          <WhatsAppIcon className={classes.footerIcon} />
        </a> */}
      </div>

      <div className={classes.footerContainer}>
        <div className={classes.footerUbicationContainer}>
          <p className={classes.footerUbication}>
            Matriz: Av. Industria Eléctrica 43-A Parque Industrial Bugambilias,
            Tlajomulco de Zúñiga.
            <br />
            <a className={classes.footerLink} href="tel:3338042122">
              Tel. 33 3804 2122
            </a>
          </p>
        </div>
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
        </ul>
      </div>
    </footer>
  );
}
