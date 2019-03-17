import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

import cls from './AboutPage.module.css';
import myPhoto from './images/my_photo.JPG';
import HTML5 from './images/HTML5.png';
import CSS3 from './images/CSS3.png';
import JS from './images/JS.png';
import ReactLogo from './images/React.png';
import NodeJS from './images/nodeJS.png';
import node_express from './images/node-express.jpg';
import Material_UI from './images/material_ui.png';
import GitHub from './images/GitHub.svg';
import Gatsby from './images/GatsbyJS.png';
import Vue from './images/vue.png';

configureAnchors({ scrollDuration: 500 });

const AboutPage = () => {
        return (
                <ScrollableAnchor id="about">
                        <div className={cls.aboutPageContainer}>
                                <div className={cls.aboutPageTopSection}>
                                        <div className={cls.PersonalInfoContainer}>
                                                <div className={cls.ImageContainer}>
                                                        <img src={myPhoto} alt="self" className={cls.Image} />
                                                </div>
                                                <div className={cls.PersonalGrouping}>
                                                        <h3 className={cls.AboutTitle}>About</h3>
                                                        <br />
                                                        <p className={cls.AboutParagraph}>
                                                                I'm resourceful, hard-working, and I value
                                                                learning and self-motivation. I'm currently a
                                                                middle school science teacher with 11 years of
                                                                experience communicating complex ideas to a
                                                                diverse audience.
                                                        </p>
                                                        <p className={cls.AboutParagraph}>
                                                                Even with the demands of being a teacher,
                                                                husband, and father, I've found time and
                                                                resources to teach myself photography,
                                                                woodworking, and programming.
                                                        </p>
                                                        <br />
                                                </div>
                                        </div>
                                        <div className={cls.ToolsContainer}>
                                                <h3 style={{ marginBottom: '10px' }}>Tool Frequency</h3>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={JS}
                                                                        alt="JavaScript"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '95%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                JavaScript
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={ReactLogo}
                                                                        alt="React Logo"
                                                                        className={cls.ToolsImage}
                                                                        style={{ marginTop: '0px' }}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '95%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                React
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={HTML5}
                                                                        alt="html 5"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div className={cls.insideBar}>
                                                                        <p className={cls.insideBarContent}>
                                                                                HTML5 / JSX
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={CSS3}
                                                                        alt="css 3"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '75%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                CSS3
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={GitHub}
                                                                        alt="GitHub"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '75%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                GitHub
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={NodeJS}
                                                                        alt="Node JS"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '70%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                NodeJS
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={Material_UI}
                                                                        alt="Material UI"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '60%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                Material-UI
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={Gatsby}
                                                                        alt="Gatsby JS"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '30%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                Gatsby
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={node_express}
                                                                        alt="Express JS"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '25%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                Express
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={cls.Tools}>
                                                        <div className={cls.toolIcons}>
                                                                <img
                                                                        src={Vue}
                                                                        alt="Vue JS"
                                                                        className={cls.ToolsImage}
                                                                />
                                                        </div>
                                                        <div className={cls.barContainer}>
                                                                <div
                                                                        className={cls.insideBar}
                                                                        style={{ width: '15%' }}
                                                                >
                                                                        <p className={cls.insideBarContent}>
                                                                                Vue
                                                                        </p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className={cls.TraitsContainer}>
                                        <div className={cls.Traits}>
                                                <h3 className={cls.TraitTitle}>CLEAN</h3>
                                                <FontAwesomeIcon icon={faCode} className={cls.faSymbol} />
                                                <p className={cls.traitDescription}>
                                                        I try to maintain clean code and to make clean,
                                                        uncluttered websites.
                                                </p>
                                        </div>
                                        <div className={cls.Traits}>
                                                <h3 className={cls.TraitTitle}>RESPONSIVE</h3>
                                                <FontAwesomeIcon
                                                        icon={faMobileAlt}
                                                        className={cls.faSymbol}
                                                />
                                                <p className={cls.traitDescription}>
                                                        It's important to have responsive websites that work
                                                        on any device.
                                                </p>
                                        </div>
                                        <div className={cls.Traits}>
                                                <h3 className={cls.TraitTitle}>INTUITIVE</h3>
                                                <FontAwesomeIcon icon={faBrain} className={cls.faSymbol} />
                                                <p className={cls.traitDescription}>
                                                        I believe websites should have a logical flow and
                                                        should be easy to use.
                                                </p>
                                        </div>
                                </div>
                        </div>
                </ScrollableAnchor>
        );
};

export default AboutPage;
