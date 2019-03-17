import React, { useState } from 'react';

// import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import cls from './Projects.module.css';
import InitialProjList from './InitialProjList';

const Projects = () => {
        const [projectsArray, setProjectsArray] = useState(InitialProjList);

        const nextProjectHandler = () => {
                let prevProjOrder = [...projectsArray];
                let displayProject = prevProjOrder.splice(0, 1)[0];
                prevProjOrder.push(displayProject);
                let newProjList = prevProjOrder.map((proj, i) => {
                        if (i === prevProjOrder.length - 1) {
                                return (
                                        <div
                                                className={[cls.MoveCenterToLeft, cls.DispProjContents].join(
                                                        ' '
                                                )}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div
                                                className={[cls.MoveRightToCenter, cls.DispProjContents].join(
                                                        ' '
                                                )}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        } else {
                                return (
                                        <div
                                                className={[cls.MoveInToRight, cls.DispProjContents].join(
                                                        ' '
                                                )}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        }
                });
                setProjectsArray(newProjList);
                // this.setState({
                // 	projectArray: newProjList
                // });
        };

        const prevProjectHandler = () => {
                let prevProjOrder = [...projectsArray];
                let displayProject = prevProjOrder.splice(prevProjOrder.length - 1, 1)[0];
                prevProjOrder.unshift(displayProject);
                let newProjList = prevProjOrder.map((proj, i) => {
                        if (i === prevProjOrder.length - 1) {
                                return (
                                        <div
                                                className={[cls.MoveInToLeft, cls.DispProjContents].join(' ')}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        } else if (i === 0) {
                                return (
                                        <div
                                                className={[cls.MoveLeftToCenter, cls.DispProjContents].join(
                                                        ' '
                                                )}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        } else {
                                return (
                                        <div
                                                className={[cls.MoveCenterToRight, cls.DispProjContents].join(
                                                        ' '
                                                )}
                                                key={Math.random() * 8}
                                        >
                                                {proj.props.children}
                                        </div>
                                );
                        }
                });
                setProjectsArray(newProjList);
                // this.setState({
                // 	projectArray: newProjList
                // });
        };

        const leftButton = (
                <div className={cls.LeftSliderButtonContainer}>
                        <button onClick={prevProjectHandler} className={cls.SliderNavButton}>
                                <FontAwesomeIcon icon={faChevronLeft} className={cls.arrowLeft} />
                        </button>
                </div>
        );
        const rightButton = (
                <div className={cls.RightSliderButtonContainer}>
                        <button onClick={nextProjectHandler} className={cls.SliderNavButton}>
                                <FontAwesomeIcon icon={faChevronRight} className={cls.arrowRight} />
                        </button>
                </div>
        );
        return (
                <ScrollableAnchor id="projects">
                        <div className={cls.ProjectsSectionContainer}>
                                <div className={cls.SliderContainer}>
                                        <div className={cls.ProjectDisplayContainer}>
                                                <div className={cls.projDispLeft}>
                                                        {projectsArray[projectsArray.length - 1]}
                                                </div>
                                                {leftButton}
                                                <div className={cls.projDispCenter}>{projectsArray[0]}</div>
                                                {rightButton}
                                                <div className={cls.projDispRight}>{projectsArray[1]}</div>
                                        </div>
                                </div>
                        </div>
                </ScrollableAnchor>
        );
};

export default Projects;
