import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({

}));

export default function Banner() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="2000px">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            <Typography variant="h4">Hola</Typography>
            <Typography variant="body1">Hola</Typography>
        </Container>
        </React.Fragment>
    );
}
