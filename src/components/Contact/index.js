import React from 'react';
import { useState } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';
import LinearProgress from '@material-ui/core/LinearProgress';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CancelIcon from '@material-ui/icons/Cancel';

const styles = theme => ({
    contact: {
        "&&": {
            width: "80%",
            marginTop: "5%",
            marginBottom: "5%",
        }
    },
    contactForm: {
        "&&": {
            marginTop: "2%"
        }
    },
    button: {
        "&&": {
            borderColor: 'white',
            color: "white",
            backgroundColor: '#008080',
            '&:hover': {
                borderColor: '#fff',
                backgroundColor: 'white',
                color: "#008080",
            },
        }
    }
});

function Contact({ classes, datas }) {
    const [send, setSend] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        setSend(1);
        console.log('Email:', event.target.email.value, 'Name: ', event.target.name.value, "Object: ", event.target.object.value, "Message: ", event.target.message.value);
        emailjs.sendForm('Freedgy_Contact', 'template_pe8bjh9', event.target, 'user_2StMasAbAPzMasQrAyivL')
            .then((result) => {
                console.log(result.text);
                event.target.reset();
                setSend(2);
            }, (error) => {
                console.log(error.text);
                event.target.reset();
                setSend(3);
            });

    }

    return (
        <section id="contact" className={classes.contact} >
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            {send == 0 ? <form className={classes.contactForm} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="object"
                            name="object"
                            label="Object"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="message"
                            name="message"
                            label="Message"
                            fullWidth
                            multiline
                            rows={7}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                            endIcon={<SendIcon />}>
                            {datas.buttonSend}
                        </Button>
                    </Grid>
                </Grid>
            </form> : send == 1 ? <LinearProgress className={classes.contactForm} /> :
                <form className={classes.contactForm} noValidate onSubmit={x => {
                    setSend(0);
                }}>
                    <Typography variant="h5" align="center" color={send == 2 ? "green" : "red"}>
                        {send == 2 ? datas.messageSuccess : datas.messageError}
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.button}
                        startIcon={send == 2 ? <CheckBoxIcon /> : <CancelIcon />}>
                        {datas.buttonSendOther}
                    </Button>
                </form>}
        </section>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);