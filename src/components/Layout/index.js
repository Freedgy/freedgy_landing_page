import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../Header';
import Footer from '../Footer';


let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        button: {
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#404040"
        },
        h5: {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#404040"

        },
        h2: {
            lineHeight: "60px",
            fontWeight: 700,
            fontSize: "50px",
            color: "#404040"
        },
        h1: {
            lineHeight: "96px",
            fontWeight: 700,
            fontSize: "88px",
            color: "#404040"
        },
        p: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#404040"
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

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#231f20',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing.unit,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'initial',
                margin: '0 16px',
                minWidth: 0,
                [theme.breakpoints.up('md')]: {
                    minWidth: 0,
                },
            },
            labelContainer: {
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing.unit,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

const styles = {
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#00a0a0'
    },
    mainContent: {
        flex: 1,
        padding: '0px',
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
