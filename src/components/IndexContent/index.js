import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Carousel from 'react-material-ui-carousel'

import Home from '../Home';
import Trailer from '../Trailer';
import Context from '../Context';
import Project from '../Project';
import Team from '../Team';
import Contact from '../Contact';

const styles = theme => ({
    root: {
        "&&": {
            flexGrow: 1
        }
    },
    paper: {
        "&&": {
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
        }

    },
    container: {
        "&&": {
            padding: '0% 2% 5%',
        }
    },
    about: {
        "&&": {
            width: "90%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5%"
        }
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
                        <section className={classes.about} id="about">
                            <Carousel interval="10000" animation="slide"
                                navButtonsProps={{
                                    style: {
                                        backgroundColor: '#008080',
                                        borderRadius: 20
                                    }
                                }}
                                indicatorIconButtonProps={{
                                    style: {
                                        padding: '0.5%'
                                    }
                                }}
                                activeIndicatorIconButtonProps={{
                                    style: {
                                        color: '#008080'
                                    }
                                }}
                            >
                                <Project datas={datas.project} />
                                <Context datas={datas.context} />
                            </Carousel>
                        </section>
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