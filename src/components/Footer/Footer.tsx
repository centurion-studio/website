import classes from './Footer.module.css';
import React from 'react';
import {IconTwitter} from '../../Icons/IconTwitter.tsx';
import {IconGitHub} from '../../Icons/IconGitHub.tsx';
import {IconHeartFilled} from '../../Icons/IconHeartFilled.tsx';

export const Footer = (): React.JSX.Element => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className="py-6" style={{borderBottom: '1px solid var(--color-border)'}}>
                    <div className="row">
                        <div className="lg:col-6 ml-auto">
                            <div className={classes.logo}></div>
                            <p style={{color: 'var(--color-muted, #6c6c89)'}} className="lg:mr-8">
                                Whether you’re a software architect, a professional developer or a novice, Centurion
                                Studio can help you work more efficiently and improve software quality and
                                maintainability.
                            </p>
                            <div className="mt-3 lg:mt-5">
                                <div className="row gx-3">
                                    <div className="col-auto">
                                        <a href="https://twitter.com/cosmifcozma"
                                           aria-label="social.label"
                                           rel="noopener noreferrer"
                                           className={classes.link}
                                           target="_blank"
                                        >
                                            <IconTwitter/>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a href="https://github.com/centurion-studio"
                                           rel="noopener noreferrer"
                                           aria-label="social.label"
                                           className={classes.link}
                                           target="_blank"
                                        >
                                            <IconGitHub/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-6">
                            <div className="row">
                                <div className="sm:col-6 md:col">
                                    <div className={classes.subheader}>Centurion Studio</div>
                                    <ul className={classes.list}>
                                        <li>
                                            <a className={classes.link} href="/about">About</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/centurion-studio/website/releases"
                                               className={classes.link}
                                               target="_blank"
                                            >
                                                Releases
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/centurion-studio/website/blob/main/CHANGELOG"
                                               className={classes.link}
                                               target="_blank"
                                            >
                                                Changelog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/centurion-studio"
                                               className={classes.link}
                                               target="_blank"
                                            >
                                                GitHub
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sm:col-6 md:col">
                                    <div className={classes.subheader}>Support</div>
                                    <ul className={classes.list}>
                                        <li>
                                            <a className={classes.link} href="/blog">
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a className={classes.link} href="/docs">
                                                Documentation
                                            </a>
                                        </li>
                                        <li>
                                            <a className={classes.link} href="/docs">
                                                FAQ
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="py-3" style={{textAlign: 'center', fontSize: '0.8rem'}}>
                    <div className="lg:col">
                        Made with {' '}
                        <IconHeartFilled style={{width: 18, color: 'rgb(224, 49, 49)', paddingTop: 10}}/>
                        {' '} in Rome - Italy.
                    </div>
                </div>
            </div>
        </footer>
    );
}