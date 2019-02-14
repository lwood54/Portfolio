import React from "react";

import cls from "./LandingPage.module.css";

const landingPage = () => {
	return (
		<div className={cls.LoadingPageContainer}>
			<div className={cls.myInfoContainer}>
				<h1 className={cls.myName}>Logan Wood</h1>
				<p className={cls.myDescription}>Teacher, developer, problem solver</p>
				<div className={cls.nextSectionArrowContainer}>ARROW GOES HERE</div>
			</div>
		</div>
	);
};

export default landingPage;
