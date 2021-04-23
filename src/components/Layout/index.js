import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import Footer from '../Footer';
/*
 Extra small devices (phones, 600px and down) 
@media only screen and (max-width: 600px) {...}

 Small devices (portrait tablets and large phones, 600px and up) 
@media only screen and (min-width: 600px) {...}

 Medium devices (landscape tablets, 768px and up) 
@media only screen and (min-width: 768px) {...}

 Large devices (laptops/desktops, 992px and up) 
@media only screen and (min-width: 992px) {...}

 Extra large devices (large laptops and desktops, 1200px and up) 
@media only screen and (min-width: 1200px) {...}*/
let theme = createMuiTheme({

    typography: {
        useNextVariants: true,
        button: {
            '@media only screen and (max-width: 600px)': {
                fontWeight: 300,
                fontSize: "10px",
                lineHeight: "18px",
            },
            '@media only screen and (min-width: 600px)': {
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "20px",
            },
            '@media only screen and (min-width: 768px)': {
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
            },
            '@media only screen and (min-width: 992px)': {
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
            },
            '@media only screen and (min-width: 1200px)': {
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
            },
        },
        h5: {
            '@media only screen and (max-width: 600px)': {
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
            },
            '@media only screen and (min-width: 600px)': {
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "20px",
            },
            '@media only screen and (min-width: 768px)': {
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "22px",
            },
            '@media only screen and (min-width: 992px)': {
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "22px",
            },
            '@media only screen and (min-width: 1200px)': {
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "24px",
            },
        },
        h2: {
            '@media only screen and (max-width: 600px)': {
                lineHeight: "40px",
                fontWeight: 400,
                fontSize: "30px",
            },
            '@media only screen and (min-width: 600px)': {
                lineHeight: "40px",
                fontWeight: 400,
                fontSize: "30px",
            },
            '@media only screen and (min-width: 768px)': {
                lineHeight: "50px",
                fontWeight: 600,
                fontSize: "40px",
            },
            '@media only screen and (min-width: 992px)': {
                lineHeight: "50px",
                fontWeight: 600,
                fontSize: "40px",
            },
            '@media only screen and (min-width: 1200px)': {
                lineHeight: "60px",
                fontWeight: 700,
                fontSize: "50px",
            },
        },
        h1: {
            '@media only screen and (max-width: 600px)': {
                lineHeight: "48px",
                fontWeight: 500,
                fontSize: "40px",
            },
            '@media only screen and (min-width: 600px)': {
                lineHeight: "60px",
                fontWeight: 500,
                fontSize: "52px",
            },
            '@media only screen and (min-width: 768px)': {
                lineHeight: "72px",
                fontWeight: 600,
                fontSize: "64px",
            },
            '@media only screen and (min-width: 992px)': {
                lineHeight: "84px",
                fontWeight: 600,
                fontSize: "76px",
            },
            '@media only screen and (min-width: 1200px)': {
                lineHeight: "96px",
                fontWeight: 700,
                fontSize: "88px",
            },
        },
        p: {
            '@media only screen and (max-width: 600px)': {
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "20px"
            },
            '@media only screen and (min-width: 600px)': {
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "20px"
            },
            '@media only screen and (min-width: 768px)': {
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22px"
            },
            '@media only screen and (min-width: 992px)': {
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "22px"
            },
            '@media only screen and (min-width: 1200px)': {
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px"
            },
        },
        fontFamily: [
            'poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#F05A22',
            dark: '#404040',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

const styles = {
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#00a0a0'
    },
    mainContent: {
        flex: 1,
        padding: '0%',
    },
};

function Layout({ location, children, classes, lang, datas }) {
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.appContent}>
                <CssBaseline />
                <Header location={location} lang={lang} datas={datas.header} />
                <main className={classes.mainContent}>{children}</main>
                <Footer datas={datas.footer} />
            </div>
        </MuiThemeProvider>
    );
}

Layout.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.object,
};

export default withStyles(styles)(Layout);
