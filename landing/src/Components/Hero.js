import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    hero: {
        width: '100%',
        height: '95vh',
        position: 'relative',
    },
    heroImg: {
        width: '100%',
        margin: '0 auto',
        display: 'block',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '73%',
        [theme.breakpoints.up('900')]: {
            objectPosition: '0% 37.2%',
        }
    },
    heroContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0',
    },
    heroContent: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
        [theme.breakpoints.up('sm')]: {
            top: '5%',
        }
    },
    heroLogo: {
        width: '15rem',
        marginBottom: '1.5rem'
    },
    heroLogoText: {
        width: '27rem',
        filter: 'contrast(14)'
    }
}));

export default function Hero() {
    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FCasitas.png?alt=media&token=ddb88c0a-6725-41f2-a647-028c8b338da0"
                alt="Solar Center Hero"
                className={classes.heroImg}
            />
            <div className={classes.heroContainer}>
                <div className={classes.heroContent}>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FRecurso%202.png?alt=media&token=fdf8312e-2613-4473-86b4-f93c03dfcc94"
                        alt="Solar Center Logo"
                        className={classes.heroLogo}
                    />
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/assets%2FRecurso%203.png?alt=media&token=17563c7c-6745-4d96-8ab9-e9e01a0eb793"
                        alt="Solar Center Logo"
                        className={classes.heroLogoText}
                    />
                </div>
            </div>
        </div>
    );
}