import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {LandingPage} from './routes/landing/LandingPage';
import {ThemeProvider} from './components/ThemeContext';
import {AboutPage} from './routes/about/AboutPage';
import {AppShell} from './components/AppShell';
import React from 'react';

export const App = (): React.JSX.Element => (
    <BrowserRouter>
        <ThemeProvider>
            <AppShell>
                <Routes>
                    <Route index path="/" element={<LandingPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/blog" element={<ComingSoon/>}/>
                    <Route path="/docs" element={<ComingSoon/>}/>
                    <Route path="*" element={<Navigate replace to="/"/>}/>
                </Routes>
            </AppShell>
        </ThemeProvider>
    </BrowserRouter>
);


const ComingSoon = (): React.JSX.Element => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column',
            justifyContent: 'center',
            marginTop: '8rem'
        }}>
            <h1>Something awesome is in the work</h1>
            <p>We are be up and running </p>
        </div>
    );
}