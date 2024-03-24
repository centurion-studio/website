import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Badge} from '../Badge/Badge';
import React from 'react';
import {ThemeContext, ThemeContextType} from '../ThemeContext.tsx';
import {IconHeartFilled} from '../../Icons/IconHeartFilled.tsx';
import {IconSun} from '../../Icons/IconSun.tsx';
import {IconMoon} from '../../Icons/IconMoon.tsx';

export const Header = (): React.JSX.Element => {
    const {toggleScheme, scheme} = React.useContext<ThemeContextType>(ThemeContext);
    const [open, setOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        const isSticky = (): void => {
            const scrollTop: number = window.scrollY;
            const header: HTMLElement | null = document.getElementById('header');

            if (header !== null) {
                if (scrollTop >= 80) {
                    header.classList.add('header-sticky')
                } else {
                    header.classList.remove('header-sticky')
                }
            }

            const goToTop: HTMLElement | null = document.getElementById('to-top-btn');
            if (goToTop !== null) {
                if (scrollTop >= 80) {
                    goToTop.classList.add('visible')
                } else {
                    goToTop.classList.remove('visible')
                }
            }
        };

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    },[]);

    return (
        <header id="header" className={classes.header}>
            <div className={classes.container}>
                <nav className="row" style={{alignItems: 'center'}}>
                    <div className="col-auto mr-auto">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <a className={classes.logo} aria-label="Centurion Studio" href="/"></a>
                            <Badge/>
                        </div>
                    </div>
                    <div className="col-auto mx-auto">
                        <nav className={`navbar ${open ? 'opened' : ''}`}>
                            <div className="navbar-menu">
                                <NavLink to="/about" onClick={()=>{
                                    setOpen(false);
                                }} className={({isActive}): string => {
                                    return `navbar-link ${isActive ? 'active' : ''}`;
                                }}>
                                    About
                                </NavLink>
                                <NavLink to="/blog" className={({isActive}): string => {
                                    return `navbar-link ${isActive ? 'active' : ''}`;
                                }}>
                                    Blog
                                </NavLink>
                                <NavLink to="/docs" onClick={()=>{
                                    setOpen(false);
                                }} className={({isActive}): string => {
                                    return `navbar-link ${isActive ? 'active' : ''}`;
                                }}>
                                    Documentation
                                </NavLink>
                            </div>
                        </nav>
                        <button onClick={(): void => setOpen((open: boolean): boolean => !open)}
                                className={`navbar-toggle ${open ? 'opened' : ''}`}
                                aria-label="Toggle sidebar"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`navbar-backdrop ${open ? 'opened' : ''}`}></div>
                    </div>
                    <div className="col-auto ml-auto">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <button className="btn mr-1" style={{boxShadow: 'none'}} onClick={toggleScheme}>
                                {scheme === 'light' ? <IconMoon/> : <IconSun/>}
                            </button>
                            <a href="https://github.com/sponsors/cosmifcozma" className="btn ml-2" target="_blank"
                               rel="noopener noreferrer">
                                <IconHeartFilled style={{color: '#e03131'}}/>
                                <span className="btn-text">Sponsor project</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}