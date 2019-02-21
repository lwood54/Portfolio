import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import cls from './AboutPage.module.css';

configureAnchors({ scrollDuration: 600 });

export class AboutPage extends Component {
        componentDidMount() {
                var n = ReactDOM.findDOMNode(this);
                // possible to use createRef
                console.log('offsetTop: ', n.getBoundingClientRect().bottom);
        }

        render() {
                return (
                        <ScrollableAnchor id="aboutPageScrollContainer">
                                <div className={cls.aboutPageContainer}>
                                        <h1>About Logan Wood</h1>
                                        <h3>More stuff about me</h3>
                                </div>
                        </ScrollableAnchor>
                );
        }
}

export default AboutPage;
