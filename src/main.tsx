import ReactDOM from 'react-dom/client'
import {App} from './App'
import React from 'react'

import './styles/main.css'
import './styles/grid.css'
import './styles/margins.css'
import './styles/paddings.css';

import './styles/components/to-top-btn.css';
import './styles/components/tooltip.css';
import './styles/components/navbar.css';
import './styles/components/btn.css';

import './styles/media/media-sm.css';
import './styles/media/media-md.css';
import './styles/media/media-lg.css';
import './styles/media/media-xl.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
);
