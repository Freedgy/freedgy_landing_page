import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const styles = theme => ({
    profile: {
        "&&": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#404040",
            '@media only screen and (max-width: 600px)': {
                width: "50%",
            },
            '@media only screen and (min-width: 600px)': {
                width: "50%",
            },
            '@media only screen and (min-width: 768px)': {
                width: "30%",
            },
            '@media only screen and (min-width: 992px)': {
                width: "30%",
            },
            '@media only screen and (min-width: 1200px)': {
                width: "25%",
            },
        }
    },
    avatar: {
        "&&": {
            height: "40%",
            width: "40%"
        }
    },
    informations: {
        "&&": {
            display: "flex",
            flexDirection: "column",
            color: "#404040",
            marginTop: "5%"
        }
    },
    role: {
        "&&": {
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "20px",
        }
    },
    city: {
        "&&": {
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "20px",
        }
    },
    name: {
        "&&": {
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: "24px",
        }
    }
});

function ProfileTeam({ classes, info }) {
    return (
        <Box className={classes.profile}>
            <Avatar className={classes.avatar} alt={info.name} src={info.image} />
            <Box className={classes.informations}>
                <Typography className={classes.name} align="center">
                    {info.name}
                </Typography>
                <Typography className={classes.city} align="center">
                    {info.city}
                </Typography>
                <Typography className={classes.role} align="center">
                    {info.role}
                </Typography>
            </Box>
            <Box >
                <Button href={info.linkedin}>
                    <FaLinkedin color="#008080" />
                </Button>
                <Button href={info.instagram}>
                    <FaInstagram color="#008080" />
                </Button>
            </Box>
        </Box>
    );
}

ProfileTeam.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTeam);

