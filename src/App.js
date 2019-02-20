import React, { Component } from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import NavBar from './components/NavBar/NavBar';

import cls from './App.module.css';

class App extends Component {
        state = {
                hideArrow: true,
                showNavBar: false
        };

        toggleHover = () => {
                let hide = this.state.hideArrow;
                this.setState({
                        hideArrow: !hide
                });
        };
        componentDidMount() {
                window.scrollTo(0, 125);
        }

        render() {
                return (
                        <div className="App">
                                <div className={cls.NavBarContainer}>
                                        <NavBar showNavBar={this.state.showNavBar} />
                                </div>
                                <LandingPage
                                        toggleHover={this.toggleHover}
                                        hideArrow={this.state.hideArrow}
                                />
                                <AboutPage />
                        </div>
                );
        }
}

export default App;
