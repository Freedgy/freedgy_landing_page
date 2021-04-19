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
    home: {
        backgroundColor: '#0067f4',
        width: "100%",
        height: "600px",
        margin: 0,
        padding: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    homeImage: {
        height: '300px'
    },
    homeText: {
        flex: "0 0 30%",
        maxWidht: '50%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        borderColor: 'rgba(255, 255, 255, 1)',
        color: "white",
        size: "large",
        margin: "10%"
    }
});

function Home({ classes, datas }) {
    return (
        <Box className={classes.home}>
            <Box className={classes.homeText}>
                <Typography variant="h1" color='#fff' align="center">
                    {datas.title}
                </Typography>
                <Typography variant="p" color="#fff" align="center">
                    {datas.description}
                </Typography>
                <Button className={classes.button} variant="outlined">
                    {datas.button}
                </Button>
            </Box>
            <Box>
                <img className={classes.homeImage} src={datas.image}></img>
            </Box>
        </Box>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);