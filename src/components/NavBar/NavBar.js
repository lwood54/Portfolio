import React, { Component } from 'react';

import cls from './NavBar.module.css';

export class NavBar extends Component {
        render() {
                let NavBarVisibility = cls.NavBarHide;
                if (this.props.showNavBar) {
                        NavBarVisibility = cls.NavBarShow;
                }

                return (
                        <div className={[NavBarVisibility, cls.NavBarContainer].join(' ')}>
                                <a href={'#landing'} className={cls.NavButton}>
                                        Home
                                </a>
                                <a
                                        href={'#about'}
                                        className={
                                                this.props.currentPage === 'AboutPageScrollContainer'
                                                        ? [cls.NavButton, cls.ActivePageButton].join(' ')
                                                        : cls.NavButton
                                        }
                                >
                                        About
                                </a>
                                <a
                                        href={'#projects'}
                                        className={
                                                this.props.currentPage === 'ProjectsScrollContainer'
                                                        ? [cls.NavButton, cls.ActivePageButton].join(' ')
                                                        : cls.NavButton
                                        }
                                >
                                        Projects
                                </a>
                                <a
                                        href={'#contact'}
                                        className={
                                                this.props.currentPage === 'ContactScrollContainer'
                                                        ? [cls.NavButton, cls.ActivePageButton].join(' ')
                                                        : cls.NavButton
                                        }
                                >
                                        Contact
                                </a>
                        </div>
                );
        }
}

export default NavBar;
