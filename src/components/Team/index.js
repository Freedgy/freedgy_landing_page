import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import ProfileTeam from "./ProfileTeam";

const infos = [
    {
        name: "Hugo Lachkar",
        city: "Barcelona",
        role: "Frontend Web Developper / Hardware manager / DevOps",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Arnau Roncari",
        city: "Berlin",
        role: "Backend Developper / Project manager",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Corentin Rozet",
        city: "Barcleona",
        role: "Backend Developper",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Noe I...",
        city: "Berlin",
        role: "Frontend Mobile Developper",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Maxence Desrousseaux",
        city: "Barcelona",
        role: "Frontend Web Developper",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Lucas Goetz",
        city: "Strasbourg",
        role: "Backend Developper",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },
    {
        name: "Victor ...",
        city: "Starsbourg",
        role: "Frontend Mobile Developper",
        description: "Un putain de BG",
        image: "/images/team/hugo.jpg",
        linkedIn: "url",
        instagram: "url"
    },

]

const styles = theme => ({
    team: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black"
    },
    teamInfos: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "black"
    },
});

function Team({ classes, lang }) {
    return (
        <Box className={classes.team}>
            <Typography variant="h2" align="center">
                {lang === 'en' ? 'Our Team' : 'Equipe!'}
            </Typography>
            <Typography variant="p" align="center">
                {lang === 'en' ? 'Freedgy is a non profitable enterprise run by 5 Epitech students from Barcelona, Berlin and Strasbourg that will spread a movement of solidarity.' : 'Equipe!'}
            </Typography>
            <Box className={classes.teamInfos}>
                {infos.map(function (info) {
                    return <ProfileTeam key={info.name} info={info} />
                })
                }
            </Box>
        </Box>

    );
}

Team.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);