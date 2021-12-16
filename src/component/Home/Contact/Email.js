import React from 'react';
import './Email.css';
import emailjs from 'emailjs-com';

import { Container, TextField } from '@mui/material';

const Email = () => {
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_5h6iutl', 'template_umad20j', e.target, 'user_F96QTxrBOvGJuJEhaEmCc')
            .then((result) => {
                alert('Email successfull Send');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <Container>
            <h1 style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>Contact Us</h1>
            <div className="login">
                <br /> <br />

                <form onSubmit={sendEmail}>
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        name="name"
                        variant="standard" />

                    <br />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        variant="standard" />

                    <br />
                    <TextField
                        sx={{ width: '100%', m: 1 }}
                        id="standard-basic"
                        label="Your Text"

                        textarea name="message"
                        variant="standard" />

                    <br />

                    <input type="submit" value="Send" />

                </form>   <br />

            </div>
        </Container>
    );
};

export default Email;