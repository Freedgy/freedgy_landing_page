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

const styles = theme => ({
    logo: {
        height: '100px',
        width: '100px',
        img: {
            margin: 0,
            height: '455px',
            width: 100
        },
    },
    appBarTransparent: {
        backgroundColor: '#1c252c',
        boxShadow: 'none',
        color: 'white',
        alignItems: 'center',
    },
    appBarSolid: {
        backgroundColor: 'white',
        color: 'black',
        alignItems: 'center',
    },
});

function Header({ classes, title, lang, location = null }) {
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <AppBar position="sticky" className={classes[navRef.current]} elevation={0}>
            <Toolbar>
                <Grid container spacing={50} alignItems="center">
                    <Grid item xs>
                        <Avatar className={classes.logo} src="/images/logo_base.png" />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <IconButton color="inherit">
                                    Home
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <IconButton color="inherit">
                                    About
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <IconButton color="inherit">
                                    Team
                                </IconButton>
                            </Grid>
                            <Grid item xs>
                                <IconButton color="inherit">
                                    Contact
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <LanguageSelector classes={classes} location={location} lang={lang} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
