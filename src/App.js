import React, { Component } from 'react';

import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';

class App extends Component {
        componentDidMount() {
                window.scrollTo(0, 0);
        }

        render() {
                return (
                        <div className="App">
                                <LandingPage />
                                <AboutPage />
                        </div>
                );
        }
}

export default App;
