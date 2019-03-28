import React, { useState } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';
import GitHub from './images/GitHub.png';
import LinkedIn from './images/linkedin.svg';
import Twitter from './images/twitter.png';

import cls from './Contact.module.css';
import axios from 'axios';

const Contact = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [company, setCompany] = useState('');
        const [message, setMessage] = useState('');
        const [sentNotice, setSentNotice] = useState(false);
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
        const handleSentNotice = () => {
                window.setTimeout(() => {
                        setSentNotice(false);
                }, 2000);
        };
        const handleSubmit = e => {
                e.preventDefault();
                console.log(name, 'submitted a message from ', company, 'saying: ', message);

                axios.post(
                        'https://formcarry.com/s/QYjWz6aXeju',
                        { name, email, company, message },
                        { headers: { Accept: 'application/json' } }
                )
                        .then(res => {
                                console.log('success: ', res);
                                setSentNotice(true);
                        })
                        .catch(function(error) {
                                console.log('error: ', error);
                        });
                setName('');
                setEmail('');
                setCompany('');
                setMessage('');
                handleSentNotice();
        };
        const notice = (
                <div className={cls.noticeContainer}>
                        <p>Thank you for reaching out. I look forward to talking with you!</p>
                </div>
        );
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
                                <div className={cls.socialMediaContainer}>
                                        <a href={'https://github.com/lwood54'} target="blank">
                                                <img src={GitHub} alt="GitHub" className={cls.icons} />
                                        </a>
                                        <a
                                                href={'https://www.linkedin.com/in/logan-wood-8b3535109/'}
                                                target="blank"
                                        >
                                                <img src={LinkedIn} alt="LinkedIn" className={cls.icons} />
                                        </a>
                                        <a href={'https://twitter.com/lwood54'} target="blank">
                                                <img src={Twitter} alt="Twitter" className={cls.icons} />
                                        </a>
                                </div>
                                {sentNotice ? notice : null}
                        </div>
                </ScrollableAnchor>
        );
};

export default Contact;
