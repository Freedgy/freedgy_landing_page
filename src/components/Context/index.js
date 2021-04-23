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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    content: {
        marginTop: "2%",
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
    }
});

function Context({ classes, datas }) {
    return (
        <section id="context" className={classes.context}>
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            <Box className={classes.content}>
                <Typography variant="p" align="justify">
                    {datas.description}
                </Typography>
                <br />
                <Typography variant="p" align="justify">
                    {datas.description_part2}
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