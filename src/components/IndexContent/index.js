import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Home from '../Home';
import About from '../About';
import Team from '../Team';
import Contact from '../Contact';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        margin: 'auto',
        overflow: 'hidden',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            minWidth: 600,
        },
        [theme.breakpoints.up('lg')]: {
            minWidth: 936,
        },
        backgroundColor: '#f4f6f7',

    },
    container: {
        padding: '48px 36px 48px',

    },
});

function Content({ classes, lang, datas }) {
    return (
        <>
            <div className={classes.root}>
                <Home datas={datas.home}/>
                <Grid
                    container
                    spacing={2}
                    className={classes.container}
                >
                    <Paper className={classes.paper}>
                        <About datas={datas.about}/>
                        <Team datas={datas.team}/>
                        <Contact datas={datas.contact} />
                    </Paper>

                </Grid>
            </div>
        </>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);