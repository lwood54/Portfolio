import React, { Component } from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

import cls from './App.module.css';

class App extends Component {
        state = {
                hideArrow: true,
                showNavBar: false
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
                window.scroll(0, 0);
                window.onscroll = () => {
                        if (window.scrollY >= 305) {
                                this.setState({ showNavBar: true });
                        } else if (window.scrollY <= 300) {
                                this.setState({ showNavBar: false });
                        }
                };
        }

        render() {
                return (
                        <div className="App">
                                <div className={cls.NavBarContainer}>
                                        <NavBar showNavBar={this.state.showNavBar} />
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

export default App;
