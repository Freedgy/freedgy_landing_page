import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    trailer: {
        marginTop: "5%",
        width: "70%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
    },
    video: {
        '@media only screen and (max-width: 600px)': {
            width: "100%",
            minHeight: "200px",
        },
        '@media only screen and (min-width: 600px)': {
            width: "100%",
            minHeight: "250px",
        },
        '@media only screen and (min-width: 768px)': {
            width: "100%",
            minHeight: "320px",
        },
        '@media only screen and (min-width: 992px)': {
            width: "100%",
            minHeight: "380px",
        },
        '@media only screen and (min-width: 1200px)': {
            width: "100%",
            minHeight: "480px",
        },
    }
});

function Trailer({ classes, lang, datas }) {
    return (
        <section className={classes.trailer} id="trailer">
            <iframe
                title="Freedgy_trailer"
                className={classes.video}
                src={datas.src}
                scrolling="no"
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