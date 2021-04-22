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
        background: 'linear-gradient(180deg, #006666 10%, #00a0a0 70%)',
        width: "100%",
        height: "650px",
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
    homeInfos: {
        flex: "0 0 40%",
        maxWidht: '50%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    homeText: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        borderColor: '#fff',
        backgroundColor: 'white',
        color: "#008080",
        size: "large",
        margin: "10%",
        '&:hover': {
            borderColor: 'white',
            color: "white",
            backgroundColor: 'transparent',
        },
    }
});

function Home({ classes, datas }) {
    return (
        <section id="home" className={classes.home}>
            <Box className={classes.homeInfos}>
                <Box className={classes.homeText}>
                    <Typography variant="h1" color='#fff' align="center">
                        {datas.title}
                    </Typography>
                    <br/>
                    <Typography variant="p" color="#fff" align="center">
                        {datas.description}
                    </Typography>
                </Box>
                <Button className={classes.button} variant="outlined">
                    {datas.button}
                </Button>
            </Box>
            <Box>
                <img className={classes.homeImage} src={datas.image}></img>
            </Box>
        </section>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);