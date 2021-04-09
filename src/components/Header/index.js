import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import LanguageSelector from '../LanguageSelector';

const lightColor = 'rgba(255, 255, 255, 1)';

const styles = theme => ({
  link: {
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
  logo: {
    img: {
      margin: 0,
      height: '455px',
      width: 100
    },
  },
});

function Header({ classes, title, lang, location = null }) {
  return (
    <AppBar color="primary" position="sticky" elevation={0}>
      <Toolbar>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs>
            <Avatar className={classes.logo} style={{ height: '150px', width: '150px' }} src="/images/logo_base.png" />
          </Grid>
          <Grid item>
            <LanguageSelector classes={classes} className={classes.link} location={location} lang={lang} />
          </Grid>
          <Grid item>
            <Button className={classes.button} variant="outlined" color="inherit" size="small">
              run
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(Header);
