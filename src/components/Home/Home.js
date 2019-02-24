import React, { Component } from 'react';

import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import cls from './Home.module.css';

class Home extends Component {
        state = {
                hideArrow: true,
                showNavBar: false,
                currentActivePage: ''
        };

        toggleHover = () => {
                let hide = this.state.hideArrow;
                this.setState({ hideArrow: !hide });
        };
        toggleNav = () => {
                let navShow = this.state.showNavBar;
                this.setState({ showNavBar: !navShow });
        };
        componentDidMount() {
                console.log('component did mount');
                window.scroll(0, 0);
                if (window.location.href !== undefined || window.location.href !== 'landing') {
                        this.setState({ showNavBar: true });
                }
        }

        componentDidUpdate() {
                // check that state has active page before initiating a check
                // to DOM. Without this check, it results in memory leak because
                // it checks after Route has changed and setState would not get to
                //update
                let activePage = window.location.href.split('#')[1];
                if (this.state.currentActivePage !== activePage) {
                        switch (activePage) {
                                case undefined:
                                        this.setState({
                                                currentActivePage: activePage,
                                                showNavBar: false
                                        });
                                        break;
                                case 'landing':
                                        this.setState({
                                                currentActivePage: activePage,
                                                showNavBar: false
                                        });
                                        break;
                                default:
                                        console.log('componentDidUpdate: switch - default');
                                        console.log('default, activePage: ', activePage);
                                        this.setState({
                                                currentActivePage: activePage,
                                                showNavBar: true
                                        });
                                        break;
                        }
                }
        }

        render() {
                return (
                        <div>
                                <div className={cls.NavBarContainer}>
                                        <NavBar
                                                showNavBar={this.state.showNavBar}
                                                currentPage={this.state.currentActivePage}
                                        />
                                </div>
                                <LandingPage
                                        toggleHover={this.toggleHover}
                                        toggleNav={this.toggleNav}
                                        hideArrow={this.state.hideArrow}
                                />
                                <AboutPage />
                                <Projects />
                                <Contact />
                        </div>
                );
        }
}

export default Home;
