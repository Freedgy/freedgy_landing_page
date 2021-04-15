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
    contentWrapper: {
        height: 368,
    },
});

function About({ classes, lang }) {
    return (
        <Grid
            container
            spacing={2}
            className={classes.contentWrapper}
        >
            <Grid item lg={6} xs={12}>
                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                    {lang === 'en' ? 'About!' : 'A propos!'}
                </Typography>
            </Grid>
            <Grid item>
                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhho
                </Typography>
            </Grid>
        </Grid>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);