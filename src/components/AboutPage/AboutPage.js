import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
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
					<div className={cls.TraitsContainer}>
						<div className={cls.Traits}>
							<h3 className={cls.TraitTitle}>CLEAN</h3>
							<FontAwesomeIcon
								icon={faCode}
								className={cls.codeSymbol}
							/>
							<p className={cls.traitDescription}>
								I try to maintain clean code and to make
								clean, uncluttered websites.
							</p>
						</div>
						<div className={cls.Traits}>
							<h3 className={cls.TraitTitle}>RESPONSIVE</h3>
							<FontAwesomeIcon
								icon={faMobileAlt}
								className={cls.codeSymbol}
							/>
							<p className={cls.traitDescription}>
								I feel it's important to have responsive
								websites and to be a responsive team member.
							</p>
						</div>
						<div className={cls.Traits}>
							<h3 className={cls.TraitTitle}>ACCESSIBLE</h3>
							<FontAwesomeIcon
								icon={faCodeBranch}
								className={cls.codeSymbol}
							/>
							<p className={cls.traitDescription}>
								I believe websites should be logical, easy to
								use, and accessible.
							</p>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default AboutPage;
