import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import cls from "./AboutPage.module.css";
import me_and_fam from "./images/me_and_fam.JPG";

configureAnchors({ scrollDuration: 600 });

export class AboutPage extends Component {
	render() {
		return (
			<ScrollableAnchor id="aboutPageScrollContainer">
				<div className={cls.aboutPageContainer}>
					<div className={cls.ImageContainer}>
						<img
							src={me_and_fam}
							alt="me and family"
							className={cls.Image}
						/>
					</div>
					<div className={cls.traits}>CLEAN</div>
					<div className={cls.traits}>RESPONSIVE</div>
					<div className={cls.traits}>ACCESSIBLE</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default AboutPage;
