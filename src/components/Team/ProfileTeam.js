
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const styles = theme => ({
    profileTeam: {
        height: "100px"
    }
});

function ProfileTeam({ classes, info }) {
    return (
        <Box>
            <Box className={classes.itemGrid}>
                <img className={classes.profileTeam} src={info.image} alt="..." />
            </Box>
            <h4>
                {info.name}
                <br />
                <small>{info.city}</small>
                <br />
                <small>{info.role}</small>
            </h4>
            <Box>
                <p >
                    {info.description}
                </p>
            </Box>
            <Box >
                <Button justIcon>
                    <FaLinkedin />
                </Button>
                <Button justIcon>
                    <FaInstagram />
                </Button>
            </Box>
        </Box>
    );
}

ProfileTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTeam);

