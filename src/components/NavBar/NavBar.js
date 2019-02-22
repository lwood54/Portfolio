import React, { Component } from "react";

import cls from "./NavBar.module.css";

export class NavBar extends Component {
	render() {
		let NavBarVisibility = cls.NavBarHide;
		if (this.props.showNavBar) {
			NavBarVisibility = cls.NavBarShow;
		}

		return (
			<div className={[NavBarVisibility, cls.NavBarContainer].join(" ")}>
				<a href={"#landingPageScrollContainer"} className={cls.NavButton}>
					Home
				</a>
				<a href={"#aboutPageScrollContainer"} className={cls.NavButton}>
					About
				</a>
				<a href={"#ProjectsScrollContainer"} className={cls.NavButton}>
					Projects
				</a>
				<a href={"#ContactScrollContainer"} className={cls.NavButton}>
					Contact
				</a>
			</div>
		);
	}
}

export default NavBar;
