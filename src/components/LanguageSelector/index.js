import React from 'react';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';

function LanguageSelector({ classes, lang, location, className }) {
  if (lang === 'en') {
    return (
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() => navigate(`/fr${location.pathname}`)}
      >
        French
      </Button>
    );
  } else {
    return (
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="small"
        onClick={() => navigate(location.pathname.replace('/' + lang + '/', '/'))}
      >
        English
      </Button>
    );
  }
}

export default LanguageSelector;
