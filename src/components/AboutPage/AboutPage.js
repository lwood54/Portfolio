import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ scrollDuration: 600 });

export class AboutPage extends Component {
        render() {
                return (
                        <ScrollableAnchor id="aboutPage">
                                <div>
                                        <h1 style={{ height: '100vh' }}>About Logan Wood</h1>
                                        <h3>More stuff about me</h3>
                                </div>
                        </ScrollableAnchor>
                );
        }
}

export default AboutPage;
