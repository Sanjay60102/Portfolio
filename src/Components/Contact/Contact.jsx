import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        // Validate the form fields before sending the email
        if (form.current.user_name.value && form.current.user_email.value && form.current.message.value) {
            emailjs.sendForm('service_wtfq8sr', 'template_hwis9or', form.current, 'le96bOLE304MPnsWR')
                .then((result) => {
                    console.log(result.text);
                    setDone(true);
                    form.current.user_name.value='';
                    form.current.user_email.value='';
                    form.current.message.value='';
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            alert('Please fill in all required fields before submitting.');
        }
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur"
                        style={{ background: "#ABF1FF94" }}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Drop a Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting me!"}</span>
                    <div className="blur c-blur1"
                        style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
