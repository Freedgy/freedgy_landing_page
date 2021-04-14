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
    widget: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    contentWrapper: {
        height: 368,
    },
    container: {
        padding: '48px 36px 48px',

    },
    button: {
        borderColor: 'rgba(255, 255, 255, 1)',
    },
    home: {
        backgroundColor: '#0067f4',
        width: "100%",
        margin: 0,
        padding: 100,
    },
    homeImage: {
        height: '400px'
    },
    homeText: {
        flex: "0 0 30%",
        maxWidht: '50%',
    }
});

function Content({ classes, lang }) {
    return (
        <>
            <div className={classes.root}>
                <Box className={classes.home} display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                    <Box className={classes.homeText} display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h1" color='#fff' align="center">
                            {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                        </Typography>
                        <Typography variant="p" color="#fff" align="center">
                            Description breve ou petit text sympatoche qui peut etre long ou pas,  je vais continuer a ecrire pour avoir un retour a la ligne et pouvoir adapter mon CSS.
                        </Typography>
                    </Box>
                    <Box>
                        <img className={classes.homeImage} src="/images/logo/logo_base.png"></img>
                    </Box>
                </Box>
                <Grid
                    container
                    spacing={2}
                    className={classes.container}
                >
                    <Paper className={classes.paper}>

                        <Grid
                            container
                            spacing={2}
                            className={classes.contentWrapper}
                        >
                            <Grid item lg={6} xs={12}>
                                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                    {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhho
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                    run
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={1}
                            className={classes.contentWrapper}
                        >
                            <Grid item>
                                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                    {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={1}
                            className={classes.contentWrapper}
                        >
                            <Grid item>
                                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                    {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            spacing={1}
                            className={classes.contentWrapper}
                        >
                            <Grid item>
                                <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                    {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>
            </div>
            {/*<div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
                   
        </div> */}

        </>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

*/