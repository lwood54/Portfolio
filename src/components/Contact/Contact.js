import React, { useState } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Contact.module.css';
import axios from 'axios';

const Contact = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [company, setCompany] = useState('');
        const [message, setMessage] = useState('');
        const handleChange = e => {
                switch (e.target.name) {
                        case 'name':
                                setName(e.target.value);
                                break;
                        case 'email':
                                setEmail(e.target.value);
                                break;
                        case 'company':
                                setCompany(e.target.value);
                                break;
                        case 'message':
                                setMessage(e.target.value);
                                break;
                        default:
                                return;
                }
        };
        const handleSubmit = async e => {
                e.preventDefault();
                console.log(name, 'submitted a message from ', company, 'saying: ', message);

                axios.post(
                        'https://formcarry.com/s/QYjWz6aXeju',
                        { name, email, company, message },
                        { headers: { Accept: 'application/json' } }
                )
                        .then(res => {
                                console.log('success: ', res);
                        })
                        .catch(function(error) {
                                console.log('error: ', error);
                        });

                e.preventDefault();
                setName('');
                setEmail('');
                setCompany('');
                setMessage('');
        };
        return (
                <ScrollableAnchor id="contact">
                        <div className={cls.ContactContainer}>
                                <form onSubmit={handleSubmit} className={cls.FormContainer}>
                                        <input
                                                type="text"
                                                className={cls.name}
                                                name="name"
                                                placeholder="Name"
                                                value={name}
                                                onChange={handleChange}
                                        />
                                        <input
                                                type="email"
                                                className={cls.email}
                                                name="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={handleChange}
                                        />
                                        <input
                                                type="text"
                                                className={cls.company}
                                                name="company"
                                                placeholder="Company"
                                                value={company}
                                                onChange={handleChange}
                                        />
                                        <textarea
                                                type="textarea"
                                                className={cls.message}
                                                name="message"
                                                placeholder="Message"
                                                value={message}
                                                onChange={handleChange}
                                        />

                                        <input type="submit" className={cls.submit} value="Send" />
                                </form>
                        </div>
                </ScrollableAnchor>
        );
};

export default Contact;
