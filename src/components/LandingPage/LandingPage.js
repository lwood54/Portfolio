import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import cls from './LandingPage.module.css';

class LandingPage extends Component {
        state = {
                hideArrow: true
        };

        toggleHover = () => {
                let hide = this.state.hideArrow;
                this.setState({ hideArrow: !hide });
        };

        render() {
                let arrowClass = null;
                if (this.state.hideArrow) {
                        arrowClass = cls.hideNextSectionArrow;
                } else {
                        arrowClass = cls.showNextSectionArrow;
                }
                return (
                        <div className={cls.LoadingPageContainer}>
                                <div className={cls.myInfoContainer}>
                                        <h1 className={cls.myName}>Logan Wood</h1>
                                        <p
                                                className={cls.myDescription}
                                                onMouseEnter={this.toggleHover}
                                                onMouseLeave={this.toggleHover}
                                        >
                                                Educator - Developer - Problem Solver
                                        </p>
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
                );
        }
}

export default LandingPage;
