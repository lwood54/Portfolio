import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Contact.module.css';

export class Contact extends Component {
        render() {
                return (
                        <ScrollableAnchor id="contact">
                                <div className={cls.ContactContainer}>Here is my contact info.</div>
                        </ScrollableAnchor>
                );
        }
}

export default Contact;
