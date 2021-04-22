import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    video: {
        width: "60%",
        minHeight: "480px"
    }
});

function Trailer({ classes, lang, datas }) {
    return (
        <section id="trailer">
            <iframe
                className={classes.video}
                src={datas.src}
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
}

Trailer.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired
};

export default withStyles(styles)(Trailer);