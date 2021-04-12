import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MuiLink from '@material-ui/core/Link'

const styles = theme => ({
    footer: {
        backgroundColor: "#231f20",
        color: "#63ccff"
      },
});

function Footer({ classes }) {
    return (
        <AppBar className={classes.footer} color="inherit" position="sticky" elevation={1}>
            <Toolbar>
                <Grid container spacing={8} alignItems="center">
                <Grid item>
                        <Typography variant="body2" align="center">
                            {'Copyright © '}
                            <MuiLink color="inherit" href="https://freedgy.com/">
                                Freedgy
                            </MuiLink>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Grid>
                    <Grid item xs />
                    <Grid item>
                        <IconButton
                            href="https://instagram.com"
                            target={'_blank'}
                            color="inherit"
                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            href="https://linkedin.com"
                            target={'_blank'}
                            color="inherit"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
