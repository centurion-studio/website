import {Header} from './Header/Header';
import React from 'react';
import {ToTopButton} from './ToTopButton.tsx';
import {Footer} from './Footer/Footer.tsx';

export const AppShell = ({children}: React.PropsWithChildren<object>): React.JSX.Element => {
    return (
        <React.Fragment>
            <ToTopButton/>
            <Header/>
            <div style={{display: 'flex', flexFlow: 'column', minHeight: 'calc(100vh - 5rem)'}}>
                <main style={{flexGrow: 1}}>
                    {children}
                </main>
                <Footer/>
            </div>
        </React.Fragment>
    );
}