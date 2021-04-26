import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    contact: {
        height: 368,
    },
});

function Contact({ classes, datas }) {
    return (
        <section id="contact" className={classes.contact} >
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
        </section>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);