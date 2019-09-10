import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
        faGamepad,
        faFlask,
        faLaptopCode,
        faCalculator,
        faSearch,
        faComments,
        faDollarSign
} from '@fortawesome/free-solid-svg-icons';

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
                title: 'Science Website',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a href="https://github.com/lwood54/science-7th-grade" target="blank">
                                                <FontAwesomeIcon icon={faFlask} className={cls.faSymbol} />
                                        </a>
                                </div>
                                <a href="https://github.com/lwood54/science-7th-grade" target="blank">
                                        <p>
                                                A site built for my science students using ReactJS,
                                                Material-UI, and CSS. Contains content and interactive review
                                                questions for 7th grade state science standards. There
                                                is a Drag and Drop Review game for the units as well.
                                        </p>
                                </a>
                        </div>
                ),
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
                title: 'Science Review Game',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a
                                                href="https://github.com/lwood54/science-7th-grade/tree/master/src/components/Templates/GameTemplate"
                                                target="blank"
                                        >
                                                <FontAwesomeIcon icon={faGamepad} className={cls.faSymbol} />
                                        </a>
                                </div>
                                <a
                                        href="https://github.com/lwood54/science-7th-grade/tree/master/src/components/Templates/GameTemplate"
                                        target="blank"
                                >
                                        <p>
                                                Drag and Drop game built with React and CSS. (Rebuilt with
                                                React Hooks) Section 2 only accessible if a score of 70 or
                                                more. Wanting to build this game got me into coding.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://lwood-science.herokuapp.com/unit4_2/game4_2" target="blank">
                                <img src={review_game} alt="review game" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Simon Game',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a
                                                href="https://codepen.io/lwood54/pen/ZxgMKp?editors=0110"
                                                target="blank"
                                        >
                                                <FontAwesomeIcon
                                                        icon={faLaptopCode}
                                                        className={cls.faSymbol}
                                                />
                                        </a>
                                </div>
                                <a href="https://codepen.io/lwood54/pen/ZxgMKp?editors=0110" target="blank">
                                        <p>
                                                This was completed as part of a Free Code Camp Challenge. I
                                                used ReactJS on codepen.io
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://codepen.io/lwood54/full/ZxgMKp" target="blank">
                                <img src={simonImg} alt="simon game" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Tic Tac Toe',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a href="https://codepen.io/lwood54/pen/xWNJvY" target="blank">
                                                <FontAwesomeIcon
                                                        icon={faLaptopCode}
                                                        className={cls.faSymbol}
                                                />
                                        </a>
                                </div>
                                <a href="https://codepen.io/lwood54/pen/xWNJvY" target="blank">
                                        <p>
                                                This was completed as part of a Free Code Camp Challenge. I
                                                used ReactJS and MaterializeCSS on codepen.io. Try to beat the
                                                computer or play against a friend.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://codepen.io/lwood54/full/xWNJvY" target="blank">
                                <img src={tictactoe} alt="tic tac toe" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Calculator',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a
                                                href="https://codepen.io/lwood54/pen/NYEyjG?editors=0110"
                                                target="blank"
                                        >
                                                <FontAwesomeIcon
                                                        icon={faCalculator}
                                                        className={cls.faSymbol}
                                                />
                                        </a>
                                </div>
                                <a href="https://codepen.io/lwood54/pen/NYEyjG?editors=0110" target="blank">
                                        <p>
                                                This was completed as part of a Free Code Camp Challenge. I
                                                used ReactJS on codepen.io.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://codepen.io/lwood54/full/NYEyjG" target="blank">
                                <img src={calculator} alt="calculator" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Pomodoro Clock',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a href="https://codepen.io/lwood54/pen/bvzVvg" target="blank">
                                                <FontAwesomeIcon
                                                        icon={faLaptopCode}
                                                        className={cls.faSymbol}
                                                />
                                        </a>
                                </div>
                                <a href="https://codepen.io/lwood54/pen/bvzVvg" target="blank">
                                        <p>
                                                This was completed as part of a Free Code Camp Challenge. You
                                                can adjust break time and work time while in use. Made with
                                                ReactJS and MaterializeCSS on codepen.io.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://codepen.io/lwood54/full/bvzVvg" target="blank">
                                <img src={pomodoroClock} alt="pomodoro clock" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Wikipedia Search Interface',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a href="https://codepen.io/lwood54/pen/dmyNEE" target="blank">
                                                <FontAwesomeIcon icon={faSearch} className={cls.faSymbol} />
                                        </a>
                                </div>
                                <a href="https://codepen.io/lwood54/pen/dmyNEE" target="blank">
                                        <p>
                                                This was completed as part of a Free Code Camp Challenge. I
                                                used ReactJS and MaterializeCSS as well as Wikipedia's API.
                                                You can search their database and pull up links to relevant
                                                articles.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://codepen.io/lwood54/full/dmyNEE" target="blank">
                                <img src={wiki_search} alt="wikipedia search" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Basic Chat App',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a
                                                href="https://github.com/lwood54/basic_social_media_web_app"
                                                target="blank"
                                        >
                                                <FontAwesomeIcon icon={faComments} className={cls.faSymbol} />
                                        </a>
                                </div>
                                <a
                                        href="https://github.com/lwood54/basic_social_media_web_app"
                                        target="blank"
                                >
                                        <p>
                                                This was one of several projects completed in Andrew Mead's
                                                NodeJS course using tools such as MongoDB, NodeJS, Socket.IO,
                                                and ExpressJS.
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://pure-sea-66635.herokuapp.com/" target="blank">
                                <img src={simple_chat} alt="simple chat app" className={cls.Image} />
                        </a>
                )
        },
        {
                title: 'Expense Tracking ',
                description: (
                        <div>
                                <div className={cls.faContainer}>
                                        <a href="https://github.com/lwood54/expensifyApp" target="blank">
                                                <FontAwesomeIcon
                                                        icon={faDollarSign}
                                                        className={cls.faSymbol}
                                                />
                                        </a>
                                </div>
                                <a href="https://github.com/lwood54/expensifyApp" target="blank">
                                        <p>
                                                This was another course I completed by Andrew Mead using
                                                React, Firebase, and Redux.{' '}
                                        </p>
                                </a>
                        </div>
                ),
                jsx: (
                        <a href="https://react-expensify-lwood3499.herokuapp.com/" target="blank">
                                <img src={expensify} alt="expensify app" className={cls.Image} />
                        </a>
                )
        }
];
let initialProjList = projects.map((project, i) => {
        if (i === projects.length - 1) {
                return (
                        // There is probably a better way to do this, but the random number ensures that
                        // the key is changed, which triggers the Virtual DOM to know that there has been
                        // a change, so the classes will update and the animations will take effect
                        <div
                                className={[cls.MoveCenterToLeft, cls.DispProjContents].join(' ')}
                                key={Math.random() * 8}
                        >
                                <h2 className={cls.projTitle}>{project.title}</h2>
                                {project.jsx}
                                <div className={cls.projDescription}>{project.description}</div>
                        </div>
                );
        } else if (i === 0) {
                return (
                        <div
                                className={[cls.MoveRightToCenter, cls.DispProjContents].join(' ')}
                                key={Math.random() * 8}
                        >
                                <h2 className={cls.projTitle}>{project.title}</h2>
                                {project.jsx}
                                <div className={cls.projDescription}>{project.description}</div>
                        </div>
                );
        } else {
                return (
                        <div
                                className={[cls.MoveInToRight, cls.DispProjContents].join(' ')}
                                key={Math.random() * 8}
                        >
                                <h2 className={cls.projTitle}>{project.title}</h2>
                                {project.jsx}
                                <div className={cls.projDescription}>{project.description}</div>
                        </div>
                );
        }
});

export default initialProjList;
