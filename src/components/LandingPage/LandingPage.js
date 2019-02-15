import React, { Component } from 'react';

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
                                                <div
                                                        className={cls.nextSectionArrow}
                                                        hidden={this.state.hideArrow}
                                                >
                                                        ARROW GOES HERE
                                                </div>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default LandingPage;
