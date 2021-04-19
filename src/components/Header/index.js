import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LanguageSelector from '../LanguageSelector';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    logo: {
        height: '40px'
    },
    appBarTransparent: {
        backgroundColor: 'transparent',
        color: 'white',
        alignItems: 'center',
        position: "absolute",
        width: '100%',
        top: 0,
        left: 0,
        margin: 0,
        padding: 10
    },
    appBarSolid: {
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
        position: "fixed",
        width: '100%',
        top: 0,
        left: 0,
        margin: 0,
        padding: "10px"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around",
    },
    navBar: {
        margin: 'auto',
        display: 'flex',
        flexdirection: "row",
        alignItem: "center",
        width: "30%",
        justifyContent: "space-around"
    },
    navItemTransparent: {
        color: "#fff"
    },
    navItemSolid: {
        color: "black"
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
                    <img className={classes.logo} src={datas.logo}></img>
                </Box>
                <Box className={classes.navBar}>
                    <Button className={classes[textRef.current]}>
                        {datas.navBar.home}
                    </Button>
                    <Button className={classes[textRef.current]}>
                        {datas.navBar.about}
                    </Button>
                    <Button className={classes[textRef.current]}>
                        {datas.navBar.team}
                    </Button>
                    <Button className={classes[textRef.current]}>
                        {datas.navBar.contact}
                    </Button>
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
