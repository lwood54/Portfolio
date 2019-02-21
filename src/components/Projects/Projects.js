import React, { Component } from 'react';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Projects.module.css';

export class Projects extends Component {
        render() {
                return (
                        <ScrollableAnchor id="ProjectsScrollContainer">
                                <div className={cls.ProjectsContainer}>Here are projects</div>
                        </ScrollableAnchor>
                );
        }
}

export default Projects;
