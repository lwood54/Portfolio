import React, { Component } from 'react';
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
import NodeExpress from './images/node-express.png';
import Material_UI from './images/material_ui.png';
import GitHub from './images/GitHub.svg';
import Photoshop from './images/Photoshop.png';

configureAnchors({ scrollDuration: 500 });

export class AboutPage extends Component {
        render() {
                return (
                        <ScrollableAnchor id="about">
                                <div className={cls.aboutPageContainer}>
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
                                                <div className={cls.TraitsContainer}>
                                                        <div className={cls.Traits}>
                                                                <h3 className={cls.TraitTitle}>CLEAN</h3>
                                                                <FontAwesomeIcon
                                                                        icon={faCode}
                                                                        className={cls.faSymbol}
                                                                />
                                                                <p className={cls.traitDescription}>
                                                                        I try to maintain clean code and to
                                                                        make clean, uncluttered websites.
                                                                </p>
                                                        </div>
                                                        <div className={cls.Traits}>
                                                                <h3 className={cls.TraitTitle}>RESPONSIVE</h3>
                                                                <FontAwesomeIcon
                                                                        icon={faMobileAlt}
                                                                        className={cls.faSymbol}
                                                                />
                                                                <p className={cls.traitDescription}>
                                                                        It's important to have responsive
                                                                        websites that work on any device.
                                                                </p>
                                                        </div>
                                                        <div className={cls.Traits}>
                                                                <h3 className={cls.TraitTitle}>INTUITIVE</h3>
                                                                <FontAwesomeIcon
                                                                        icon={faBrain}
                                                                        className={cls.faSymbol}
                                                                />
                                                                <p className={cls.traitDescription}>
                                                                        I believe websites should have a
                                                                        logical flow and should be easy to
                                                                        use.
                                                                </p>
                                                        </div>
                                                </div>

                                                <div className={cls.Tools}>
                                                        <img
                                                                src={HTML5}
                                                                alt="html 5"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <img
                                                                src={CSS3}
                                                                alt="css 3"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <img
                                                                src={JS}
                                                                alt="JavaScript"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <h4 className={cls.ReactTitle}>React</h4>
                                                        <img
                                                                src={ReactLogo}
                                                                alt="React Logo"
                                                                className={cls.ToolsImage}
                                                                style={{ marginTop: '0px' }}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <img
                                                                src={NodeExpress}
                                                                alt="Node JS"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <h4 className={cls.ReactTitle}>Material-UI</h4>
                                                        <img
                                                                src={Material_UI}
                                                                alt="Material UI"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <h4 className={cls.ReactTitle}>GitHub</h4>
                                                        <img
                                                                src={GitHub}
                                                                alt="GitHub"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                                <div className={cls.Tools}>
                                                        <img
                                                                src={Photoshop}
                                                                alt="Photoshop"
                                                                className={cls.ToolsImage}
                                                        />
                                                </div>
                                        </div>
                                </div>
                        </ScrollableAnchor>
                );
        }
}

export default AboutPage;
