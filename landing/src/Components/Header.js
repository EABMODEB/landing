import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    headerAppBarTransparent: {
        backgroundColor: theme.palette.background.default,
        boxShadow: "none"
    },
    headerAppBarSolid: {
        backgroundColor: theme.palette.background.default
    },
    headerToolbar: {
        padding: "0 .5rem",
        justifyContent: 'center'
    },
    headerMobile: {
        [[theme.breakpoints.up('sm')]]: {
            display: "none"
        },
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerDesktop: {
        [[theme.breakpoints.down('xs')]]: {
            display: "none"
        },
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerContent: {
        display: "flex",
        alignItems: "center"
    },
    headerLogo: {
        width: '54px',
        margin: '0.5rem'
    },
    headerLogoText: {
        width: '200px'
    }
}));

export default function Header() {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('headerAppBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 1
            if (show) {
                setNavBackground('headerAppBarSolid')
            } else {
                setNavBackground('headerAppBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div className={classes.header}>
            <AppBar className={classes[navRef.current]} position="fixed">
                <Toolbar variant="regular" className={classes.headerToolbar}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FRecurso%202.png?alt=media&token=fdf8312e-2613-4473-86b4-f93c03dfcc94"
                        alt="Logo Text Solar Center"
                        className={classes.headerLogo}
                    />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FRecurso%203.png?alt=media&token=17563c7c-6745-4d96-8ab9-e9e01a0eb793"
                        alt="Logo Text Solar Center"
                        className={classes.headerLogoText}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )

}