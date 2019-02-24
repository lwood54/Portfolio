import React, { Component } from 'react';
import Slider from 'react-slick';

import ScrollableAnchor from 'react-scrollable-anchor';

import cls from './Projects.module.css';

export class Projects extends Component {
        render() {
                const settings = {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                };
                return (
                        <ScrollableAnchor id="ProjectsScrollContainer">
                                <div className={cls.ProjectsContainer}>Here are projects</div>
                        </ScrollableAnchor>
                );
        }
}

export default Projects;
