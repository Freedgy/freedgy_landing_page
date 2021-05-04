import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LanguageSelector from '../LanguageSelector';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    logo: {
        "&&": {
            height: 'auto',
            width: '40px',
            maxWidth: '100%',
            padding: ".5%"
        }
    },
    appBarTransparent: {
        "&&": {
            backgroundColor: 'transparent',
            color: 'white',
            alignItems: 'center',
            position: "absolute",
            width: '100%',
            height: "9%",
            top: 0,
            left: 0,
            margin: 0,
            padding: "1%"
        }
    },
    appBarSolid: {
        "&&": {
            backgroundColor: 'white',
            color: '#404040',
            alignItems: 'center',
            position: "fixed",
            width: '100%',
            height: "9%",
            top: 0,
            left: 0,
            margin: 0,
            padding: "1%"
        }
    },
    container: {
        "&&": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100%",
            width: "100%",
            justifyContent: "space-around",
        }
    },
    navBar: {
        "&&": {
            margin: 'auto',
            display: 'flex',
            flexdirection: "row",
            alignItem: "center",
            width: "30%",
            justifyContent: "space-around"
        }
    },
    navItemTransparent: {
        "&&": {
            color: "#fff",
            backgroundColor: 'transparent',
            '&:hover': {
                color: "black",
                backgroundColor: 'transparent',
            },
        }
    },
    navItemSolid: {
        "&&": {
            color: "#404040",
            backgroundColor: 'transparent',
            '&:hover': {
                color: "#008080",
                backgroundColor: 'transparent',
            },
        }
    }
});

function Header({ classes, lang, location = null, datas }) {
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [navTextColor, setNavTextColor] = useState('navItemTransparent')
    const navRef = React.useRef()
    const textRef = React.useRef()
    navRef.current = navBackground
    textRef.current = navTextColor
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (show) {
                setNavBackground('appBarSolid')
                setNavTextColor('navItemSolid')
            } else {
                setNavBackground('appBarTransparent')
                setNavTextColor('navItemTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppBar className={classes[navRef.current]} elevation={0}>
            <Box className={classes.container}>
                <Box>
                    <img className={classes.logo} alt="watermark_freedgy" src={datas.logo}></img>
                </Box>
                <Box className={classes.navBar}>
                    {datas.navBar.map(function (info) {
                        return (<Button key={info.title} className={classes[textRef.current]} href={info.id}>
                            {info.title}
                        </Button>);
                    })
                    }
                </Box>
                <Box>
                    <LanguageSelector classes={classes} location={location} lang={lang} />
                </Box>
            </Box>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);