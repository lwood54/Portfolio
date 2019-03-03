import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
        <a href="https://lwood-science.herokuapp.com/" target="blank" className={cls.Button} key="0">
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
        state = {
                projectArray: []
        };

        // practiceRef = React.createRef();
        // you can access a DOM element by ref={this.practiceRef}

        componentDidMount() {
                let initialProjList = projects.map((project, i) => {
                        if (i === this.state.projectArray.length - 1) {
                                return (
                                        // There is probably a better way to do this, but the random number ensures that
                                        // the key is changed, which triggers the Virtual DOM to know that there has been
                                        // a change, so the classes will update and the animations will take effect
                                        <div className={cls.MoveCenterToLeft} key={Math.random() * 8}>
                                                {project}
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div className={cls.MoveRightToCenter} key={Math.random() * 8}>
                                                {project}
                                        </div>
                                );
                        } else {
                                return (
                                        <div className={cls.MoveInToRight} key={Math.random() * 8}>
                                                {project}
                                        </div>
                                );
                        }
                });
                this.setState({ projectArray: initialProjList });
        }

        nextProjectHandler = () => {
                let prevProjOrder = [...this.state.projectArray];
                let displayProject = prevProjOrder.splice(0, 1)[0];
                prevProjOrder.push(displayProject);
                let newProjList = prevProjOrder.map((proj, i) => {
                        if (i === prevProjOrder.length - 1) {
                                return (
                                        <div className={cls.MoveCenterToLeft} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div className={cls.MoveRightToCenter} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        } else {
                                return (
                                        <div className={cls.MoveInToRight} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        }
                });

                this.setState({
                        projectArray: newProjList
                });
        };

        prevProjectHandler = () => {
                let prevProjOrder = [...this.state.projectArray];
                let displayProject = prevProjOrder.splice(prevProjOrder.length - 1, 1)[0];
                prevProjOrder.unshift(displayProject);
                let newProjList = prevProjOrder.map((proj, i) => {
                        if (i === prevProjOrder.length - 1) {
                                return (
                                        <div className={cls.MoveInToLeft} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div className={cls.MoveLeftToCenter} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        } else {
                                return (
                                        <div className={cls.MoveCenterToRight} key={Math.random() * 8}>
                                                {proj.props.children}
                                        </div>
                                );
                        }
                });
                this.setState({
                        projectArray: newProjList
                });
        };

        handleAnimate = () => {
                console.log('animating', this.practiceRef.current.attributes);
                // this.practiceRef.current.className = 'Animated';
                this.practiceRef.current.key = '2';
                console.log('changed: ', this.practiceRef.current.children);
        };

        render() {
                const leftButton = (
                        <div className={cls.LeftSliderButtonContainer}>
                                <button onClick={this.prevProjectHandler} className={cls.SliderNavButton}>
                                        <FontAwesomeIcon icon={faChevronLeft} className={cls.arrowLeft} />
                                </button>
                        </div>
                );
                const rightButton = (
                        <div className={cls.RightSliderButtonContainer}>
                                <button onClick={this.nextProjectHandler} className={cls.SliderNavButton}>
                                        <FontAwesomeIcon icon={faChevronRight} className={cls.arrowRight} />
                                </button>
                        </div>
                );
                return (
                        <ScrollableAnchor id="projects">
                                <div className={cls.ProjectsSectionContainer}>
                                        <div className={cls.SliderContainer}>
                                                <div className={cls.ProjectDisplayContainer}>
                                                        <div
                                                                className={cls.projDispLeft}
                                                                ref={this.practiceRef}
                                                        >
                                                                {
                                                                        this.state.projectArray[
                                                                                this.state.projectArray
                                                                                        .length - 1
                                                                        ]
                                                                }
                                                        </div>
                                                        {leftButton}
                                                        <div className={cls.projDispCenter}>
                                                                {this.state.projectArray[0]}
                                                        </div>
                                                        {rightButton}
                                                        <div className={cls.projDispRight}>
                                                                {this.state.projectArray[1]}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </ScrollableAnchor>
                );
        }
}

export default Projects;
