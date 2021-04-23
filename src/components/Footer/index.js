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
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


const styles = theme => ({
    footer: {
        backgroundColor: "white",
        color: "#404040",
        position: "static",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "1%"
    },
});

function Footer({ classes, datas }) {
    return (

        <Box className={classes.footer} alignItems="center">
            <Box>
                <Typography variant="body2" align="center">
                    {'Copyright © '}
                    <MuiLink color="#008080" href="https://freedgy.com/">
                        Freedgy
                    </MuiLink>
                    {' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
            <Box>
                <Button href={datas.instagram}>
                    <FaInstagram color="#008080" />
                </Button>
                <Button href={datas.linkedin}>
                    <FaLinkedin color="#008080" />
                </Button>
            </Box>
        </Box>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
