import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Home from '../Home';
import Trailer from '../Trailer';
import Context from '../Context';
import Project from '../Project';
import Team from '../Team';
import Contact from '../Contact';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        margin: 'auto',
        overflow: 'hidden',
        [theme.breakpoints.up('sm')]: {
            minWidth: 600,
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 936,
        },
        backgroundColor: '#f4f6f7',
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    container: {
        padding: '0px 36px 48px',
    },
});

function Content({ classes, lang, datas }) {
    return (
        <>
            <div className={classes.root}>
                <Home datas={datas.home} />
                <Box className={classes.container}>
                    <Paper className={classes.paper}>
                        <Trailer datas={datas.trailer} />
                        <Project datas={datas.project} />
                        <Context datas={datas.context} />
                        <Team datas={datas.team} />
                        <Contact datas={datas.contact} />
                    </Paper>
                </Box>
            </div>
        </>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);