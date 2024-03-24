import {IconHeartFilled} from '../../../../Icons/IconHeartFilled';
import classes from './Hero.module.css';
import React from 'react';

export const Hero = (): React.JSX.Element => {
    return (
        <header className={classes.hero}>
            <div className={classes.container}>
                <div className={classes.heroGradient}>
                    <h1 className={classes.heroTitle}>
                        Design, prototype, and build with rapidity
                    </h1>
                    <p className={classes.heroDescription}>
                        Whether you’re a software architect, a professional developer or a novice, Centurion Studio can
                        help you work more efficiently and improve software quality and maintainability.
                    </p>
                    <div className="mt-6">
                        <div className="row g-3" style={{justifyContent: 'center'}}>
                            <div className="col-auto">
                                <a href="https://app.centurion-studio.com" className="btn btn-primary md:btn-lg">
                                    <span className="btn-text">Get started now</span>
                                </a>
                            </div>
                            <div className="col-auto">
                                <a href="/docs" className="btn md:btn-lg">
                                    <span className="btn-text">View documentation</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.heroImg}>
                    <img alt="Centurion Studio Dashboard" className="img-light"
                         style={{width: '100%', height: 'auto'}}
                         src="/dashboard-light.png"/>
                    <img alt="Centurion Studio Dashboard" className="img-dark"
                         style={{width: '100%', height: 'auto'}}
                         src="/dashboard-dark.png"/>
                </div>
                <div style={{textAlign: 'center', fontSize: '0.5rem', marginBottom: '4rem'}}>
                    <div className="lg:col">
                        Made with {' '}
                        <IconHeartFilled style={{width: 18, color: 'rgb(224, 49, 49)', paddingTop: 16}}/>
                        {' '} in Rome - Italy.
                    </div>
                </div>
            </div>
        </header>
    );
}