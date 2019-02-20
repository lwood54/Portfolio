import React, { Component } from 'react';

import cls from './NavBar.module.css';

export class NavBar extends Component {
        render() {
                let NavBarClass = cls.NavBarHide;
                if (this.props.showNavBar) {
                        NavBarClass = cls.NavBarShow;
                }

                return (
                        <div className={NavBarClass}>
                                <div className={cls.NavButton}>About</div>
                                <div className={cls.NavButton}>Projects</div>
                                <div className={cls.NavButton}>Contact</div>
                        </div>
                );
        }
}

export default NavBar;
