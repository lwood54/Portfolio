import React, { Component } from 'react';

import cls from './LandingPage.module.css';

class LandingPage extends Component {
        state = {
                hoverDescription: false
        };

        handleHover = () => {
                let hover = this.state.hoverDescription;
                this.setState({ hoverDescription: !hover });
        };

        handleOut = () => {
                alert('out');
        };
        render() {
                return (
                        <div className={cls.LoadingPageContainer}>
                                <div className={cls.myInfoContainer}>
                                        <h1 className={cls.myName}>Logan Wood</h1>
                                        <p className={cls.myDescription} onMouseEnter={this.handleHover}>
                                                Educator - Developer - Problem Solver
                                        </p>
                                        <div
                                                className={cls.nextSectionArrowContainer}
                                                hidden={this.state.hoverDescription}
                                        >
                                                ARROW GOES HERE
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default LandingPage;
