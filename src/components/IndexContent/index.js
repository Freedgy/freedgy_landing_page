import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Gr } from 'react-flags-select';


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
        marginBottom: '20px',
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
});

function Content({ classes, lang }) {
    return (
        <>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    className={classes.container}
                >
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                spacing={2}
                                className={classes.contentWrapper}
                            >
                                <Grid item>
                                    <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                        {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                        run
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
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

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                spacing={1}
                                className={classes.contentWrapper}
                            >
                                <Grid lg={6} xs={12} item>
                                    <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                        {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Grid
                                container
                                spacing={1}
                                className={classes.contentWrapper}
                            >
                                <Grid lg={6} xs={12} item>
                                    <Typography component="h2" variant="h4" color="textSecondary" align="center">
                                        {lang === 'en' ? 'Welcome!' : 'Bienvenue!'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

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