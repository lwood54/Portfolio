import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import cls from './LandingPage.module.css';

configureAnchors({ scrollDuration: 500 });

class LandingPage extends Component {
        render() {
                let arrowClass = null;
                if (this.props.hideArrow) {
                        arrowClass = cls.hideNextSectionArrow;
                } else {
                        arrowClass = cls.showNextSectionArrow;
                }
                return (
                        <ScrollableAnchor id="landing">
                                <div className={cls.LandingPageContainer}>
                                        <div className={cls.myInfoContainer}>
                                                <h1 className={cls.myName}>Logan Wood</h1>
                                                <a
                                                        href={'#about'}
                                                        className={cls.myDescription}
                                                        onMouseEnter={this.props.toggleHover}
                                                        onMouseLeave={this.props.toggleHover}
                                                        onClick={this.props.toggleNav}
                                                >
                                                        Educator - Developer - Problem Solver
                                                </a>
                                                <div className={cls.nextSectionArrowContainer}>
                                                        <div className={arrowClass}>
                                                                <FontAwesomeIcon
                                                                        icon={faChevronDown}
                                                                        className={cls.arrowDown}
                                                                />
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </ScrollableAnchor>
                );
        }
}

export default LandingPage;
