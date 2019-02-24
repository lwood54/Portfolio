import React from 'react';
import { Link } from 'react-router-dom';

import cls from './TicTacToe.module.css';

const TicTacToe = props => {
        return (
                <div>
                        <h1>TicTacToe</h1>
                        <Link to="/#projects">
                                <button>Projects</button>
                        </Link>
                </div>
        );
};

export default TicTacToe;
