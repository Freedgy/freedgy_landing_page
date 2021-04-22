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
    context: {
        margin: "5% 0%",
        width: "100%",
        height: "100%"
    },
    content: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
});

function Context({ classes, datas }) {
    return (
        <section id="context" className={classes.context}>
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            <Box className={classes.content}>
                <Typography variant="p" align="center">
                    {datas.description}
                </Typography>
            </Box>
        </section>
    );
}

Context.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Context);