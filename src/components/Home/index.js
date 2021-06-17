import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useWindowSize from '../../../static/js/useWindowSize';

const styles = theme => ({
    home: {
        "&&": {
            background: 'linear-gradient(180deg, #006666 10%, #00a0a0 70%)',
            width: "100%",
            margin: 0,
            padding: '10%',
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            '@media only screen and (max-width: 992px)': {
                paddingTop: '12%',
                paddingBottom: '0%'
            },
        }
    },
    homeImage: {
        "&&": {
            width: "35%",
            height: 'auto'
        }
    },
    homeInfos: {
        "&&": {
            flex: "0 0 50%",
            maxWidht: '50%',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            '@media only screen and (max-width: 992px)': {
                flex: "0 0 90%",
            },
        }
    },
    homeText: {
        "&&": {
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    },
    button: {
        "&&": {
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
    }
});

function Home({ classes, datas }) {
    const size = useWindowSize();

    return (
        <section id="home" className={classes.home}>
            <Box className={classes.homeInfos}>
                <Box className={classes.homeText}>
                    <Typography variant="h1" color='secondary' align="center">
                        {datas.title}
                    </Typography>
                    <br />
                    <Typography variant="body1" color="secondary" align="justify">
                        {datas.description}
                    </Typography>
                </Box>
                <Button className={classes.button} variant="outlined" href="http://app.freedgy.com">
                    {datas.button}
                </Button>
            </Box>
            {size.width > 992 ? (<img alt="logo_freedgy" className={classes.homeImage} src={datas.image}></img>) : (null)}
        </section>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);