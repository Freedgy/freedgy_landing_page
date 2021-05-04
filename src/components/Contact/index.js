import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

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
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Email:', email, 'Name: ', name, "Object: ", object, "Message: ", message);
        emailjs.sendForm('Freedgy_Contact', 'template_pe8bjh9', event.target, 'user_2StMasAbAPzMasQrAyivL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <section id="contact" className={classes.contact} >
            <Typography variant="h2" align="center">
                {datas.title}
            </Typography>
            <form className={classes.contactForm} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="given-name"
                            value={name}
                            onInput={e => setName(e.target.value)}
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
                            value={email}
                            onInput={e => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="object"
                            name="object"
                            label="Object"
                            fullWidth
                            value={object}
                            onInput={e => setObject(e.target.value)}
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
                            value={message}
                            onInput={e => setMessage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.button}
                            endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </section>
    );
}

Contact.propTypes = {
    classes: PropTypes.object.isRequired,
    datas: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);