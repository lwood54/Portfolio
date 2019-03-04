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
        {
                title: '7th Grade Science Website',
                description:
                        'This was built with React, Express, and Material-UI. My students have access to all 7th grade science standards. There is detailed content information for each of the 26 state standards. There are 5 to 10 interactive review questions for each state standard with immediate success feedback. There is also a drag and drop review game for each unit with score updates.',
                jsx: (
                        <a
                                href="https://lwood-science.herokuapp.com/"
                                target="blank"
                                className={cls.Button}
                                key="0"
                        >
                                <img src={science_site} alt="Mr Wood's Science Page" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Science Review Game App',
                description:
                        'I created this Drag and Drop Review Game for my science students. This game was built with just React and CSS. There were no other libraries used in building this app. Each game has 2 sections. The 2nd section can only be accessed with a high enough score.',
                jsx: (
                        <a href="https://lwood-science.herokuapp.com/unit4_2/game4_2" target="blank">
                                <img src={review_game} alt="review game" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Simon Game',
                description:
                        'This was created as a code challenge from FreeCodeCamp.com. This was made with React. It was built in codepen.io and was one of the earliest projects where I was using React.',
                jsx: (
                        <a href="https://codepen.io/lwood54/full/ZxgMKp" target="blank">
                                <img src={simonImg} alt="simon game" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Tic Tac Toe',
                description:
                        'This was another code challenge from FreeCodeCamp.com. This was a fun challenge in buidling some basic AI. It is a fun challenge where I was able to create a basic AI that can only be tied. There is also an option to play 2 players.',
                jsx: (
                        <a href="https://codepen.io/lwood54/full/xWNJvY" target="blank">
                                <img src={tictactoe} alt="tic tac toe" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Calculator',
                description:
                        'This is a fully functional calculator built using React and MaterializeCSS styling library. It was a code challenge from FreeCodeCamp.',
                jsx: (
                        <a href="https://codepen.io/lwood54/full/NYEyjG" target="blank">
                                <img src={calculator} alt="calculator" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Pomodoro Clock',
                description:
                        'This pomodoro clock was a FreeCodeCamp challenge that used React and MaterializeCSS.',
                jsx: (
                        <a href="https://codepen.io/lwood54/full/bvzVvg" target="blank">
                                <img src={pomodoroClock} alt="pomodoro clock" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Wikipedia Search Interface',
                description: "This was another FreeCodeCamp challenge that utilized wikipedia's API.",
                jsx: (
                        <a href="https://codepen.io/lwood54/full/dmyNEE" target="blank">
                                <img src={wiki_search} alt="wikipedia search" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Basic Chat App',
                description:
                        'This was more of a project focusing on Node.JS and Socket.IO. It is a basic chat app that allows the creation of a room and users to sign on and chat.',
                jsx: (
                        <a href="https://pure-sea-66635.herokuapp.com/" target="blank">
                                <img src={simple_chat} alt="simple chat app" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Expense Tracking ',
                description:
                        'This was a project I followed from a course on Udemy by Andrew Mead. It sets up a Google Authorization and uses Firebase as its back end.',
                jsx: (
                        <a href="https://react-expensify-lwood3499.herokuapp.com/" target="blank">
                                <img src={expensify} alt="expensify app" className={cls.Image} />
                        </a>
                )
        }
];

class Projects extends Component {
        state = {
                projectArray: [],
                showDetails: false
        };

        // practiceRef = React.createRef();
        // you can access a DOM element by ref={this.practiceRef}
        handleShowDetails = () => {
                let currentShowDetails = this.state.showDetails;
                console.log('currentShowDetails: ', currentShowDetails);
                this.setState({ showDetails: !currentShowDetails });
        };

        componentDidMount() {
                let initialProjList = projects.map((project, i) => {
                        if (i === this.state.projectArray.length - 1) {
                                return (
                                        // There is probably a better way to do this, but the random number ensures that
                                        // the key is changed, which triggers the Virtual DOM to know that there has been
                                        // a change, so the classes will update and the animations will take effect
                                        <div className={cls.MoveCenterToLeft} key={Math.random() * 8}>
                                                <h2 className={cls.projTitle}>{project.title}</h2>
                                                {project.jsx}
                                                <p className={cls.projDescription}>{project.description}</p>
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div className={cls.MoveRightToCenter} key={Math.random() * 8}>
                                                <h2 className={cls.projTitle}>{project.title}</h2>
                                                {project.jsx}
                                                <p className={cls.projDescription}>{project.description}</p>
                                        </div>
                                );
                        } else {
                                return (
                                        <div className={cls.MoveInToRight} key={Math.random() * 8}>
                                                <h2 className={cls.projTitle}>{project.title}</h2>
                                                {project.jsx}
                                                <p className={cls.projDescription}>{project.description}</p>
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

                                                        <div className={cls.projDispCenter}>
                                                                {leftButton}
                                                                {this.state.projectArray[0]}
                                                                {rightButton}
                                                        </div>

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
