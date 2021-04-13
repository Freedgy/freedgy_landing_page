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

const lightColor = 'rgba(255, 255, 255, 1)';

const styles = theme => ({
    link: {
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
    logo: {
        height: '150px',
        width: '150px',
        img: {
            margin: 0,
            height: '455px',
            width: 100
        },
    },
    appBarTransparent: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        color: 'white'
    },
    appBarSolid: {
        backgroundColor: 'white',
        color: 'black'
    }
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
                <Grid container spacing={8} alignItems="center">
                    <Grid item>
                        <Avatar className={classes.logo} src="/images/logo_base.png" />
                    </Grid>
                    <Grid>
                        <IconButton color="inherit">
                            1
                        </IconButton>
                        <IconButton color="inherit">
                            2
                        </IconButton>
                        <IconButton color="inherit">
                            3
                        </IconButton>
                        <IconButton color="inherit">
                            4
                        </IconButton>
                        <IconButton color="inherit">
                            5
                        </IconButton>
                        <IconButton color="inherit">
                            6
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <LanguageSelector classes={classes} className={classes.link} location={location} lang={lang} />
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} variant="outlined" color="inherit" size="small">
                            run
                        </Button>
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
