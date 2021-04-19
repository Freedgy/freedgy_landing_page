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

const styles = theme => ({
    about: {
        height: 368,
    },
});

function About({ classes, datas }) {
    return (
        <section id="about" className={classes.about}>
            <Typography variant="h4" align="center">
                {datas.title}
            </Typography>
            <Typography variant="h4" align="center">
                {datas.description}
            </Typography>
        </section>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);