import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Projects.module.css';
import simonImg from './images/simon.png';
import science_site from './images/science_site.png';
import tictactoe from './images/tictactoe.png';
import review_game from './images/review_game.png';
import calculator from './images/calculator.png';
import pomodoroClock from './images/pomodoroClock.png';
import wiki_search from './images/wiki_search.png';
import simple_chat from './images/simple_chat_app.png';
import expensify from './images/expensify.png';

let projects = [
        <a href="https://lwood-science.herokuapp.com/" target="blank" className={cls.Button}>
                <img src={science_site} alt="Mr Wood's Science Page" className={cls.Image} />
        </a>,
        <a href="https://lwood-science.herokuapp.com/unit4_2/game4_2" target="blank">
                <img src={review_game} alt="review game" className={cls.Image} />
        </a>,
        <a href="https://codepen.io/lwood54/full/ZxgMKp" target="blank">
                <img src={simonImg} alt="simon game" className={cls.Image} />
        </a>,
        <a href="https://codepen.io/lwood54/full/xWNJvY" target="blank">
                <img src={tictactoe} alt="tic tac toe" className={cls.Image} />
        </a>,
        <a href="https://codepen.io/lwood54/full/NYEyjG" target="blank">
                <img src={calculator} alt="calculator" className={cls.Image} />
        </a>,
        <a href="https://codepen.io/lwood54/full/bvzVvg" target="blank">
                <img src={pomodoroClock} alt="pomodoro clock" className={cls.Image} />
        </a>,
        <a href="https://codepen.io/lwood54/full/dmyNEE" target="blank">
                <img src={wiki_search} alt="wikipedia search" className={cls.Image} />
        </a>,
        <a href="https://pure-sea-66635.herokuapp.com/" target="blank">
                <img src={simple_chat} alt="simple chat app" className={cls.Image} />
        </a>,
        <a href="https://react-expensify-lwood3499.herokuapp.com/" target="blank">
                <img src={expensify} alt="expensify app" className={cls.Image} />
        </a>
];

class Projects extends Component {
        render() {
                let packagedProjects = projects.map((project, index) => {
                        return <div key={index}>{project}</div>;
                });
                return (
                        <ScrollableAnchor id="projects">
                                <div className={cls.ProjectsContainer}>{packagedProjects}</div>
                        </ScrollableAnchor>
                );
        }
}

export default Projects;
