import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ProfileTeam from "./ProfileTeam";

const styles = theme => ({
    team: {
        marginTop: "5%",
        width: "90%",
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
        padding: "5%"
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