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

const styles = theme => ({
    team: {
        marginBottom: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#404040",
    },
    teamInfos: {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "center",
        color: "#404040",
        padding: "50px"
    },
});

function Team({ classes, datas }) {
    return (
        <section id="team" className={classes.team}>
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            <Typography variant="p" align="center">
                {datas.description}
            </Typography>
            <Box className={classes.teamInfos}>
                {datas.profiles.map(function (info) {
                    return <ProfileTeam key={info.name} info={info} />
                })
                }
            </Box>
        </section>

    );
}

Team.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);