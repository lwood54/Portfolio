import React, { useState } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Contact.module.css';

const Contact = () => {
        const [name, setName] = useState('');
        const [company, setCompany] = useState('');
        const handleChange = (e, field) => {
                switch (field) {
                        case 'name':
                                setName(e.target.value);
                                break;
                        case 'company':
                                setCompany(e.target.value);
                                break;
                        default:
                                return;
                }
        };
        const handleSubmit = e => {
                e.preventDefault();
                console.log('The name: ', name, 'was submitted.');
                setName('');
                setCompany('');
        };
        return (
                <ScrollableAnchor id="contact">
                        <div className={cls.ContactContainer}>
                                <form onSubmit={handleSubmit}>
                                        <label>
                                                Name:
                                                <input
                                                        type="text"
                                                        name="name"
                                                        value={name}
                                                        onChange={e => handleChange(e, 'name')}
                                                />
                                        </label>
                                        <label>
                                                Company:
                                                <input
                                                        type="text"
                                                        name="company"
                                                        value={company}
                                                        onChange={e => handleChange(e, 'company')}
                                                />
                                        </label>
                                        <input type="submit" value="Submit" />
                                </form>
                        </div>
                </ScrollableAnchor>
        );
};

export default Contact;
