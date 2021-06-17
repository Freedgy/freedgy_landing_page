import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const styles = theme => ({
    project: {
        "&&": {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    },
    content: {
        "&&": {
            marginTop: "2%",
            width: "80%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }
    },
});

function Project({ classes, datas }) {
    return (
        <section id="project" className={classes.project}>
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            <Box className={classes.content}>
                <Typography variant="body1" align="justify">
                    {datas.description}
                </Typography>
            </Box>
        </section>
    );
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Project);