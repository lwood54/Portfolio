import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';

// import cls from './App.module.css';

class App extends Component {
        render() {
                return (
                        <div className="App">
                                <Switch>
                                        <Route path="/" component={Home} />
                                </Switch>
                        </div>
                );
        }
}

export default App;
