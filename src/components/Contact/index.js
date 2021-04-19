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

function Contact({ classes, datas }) {
    return (
        <Grid
            container
            spacing={1}
            className={classes.contentWrapper}
        >
            <Grid item>
                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                    {datas.title}
                </Typography>
            </Grid>
        </Grid>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);