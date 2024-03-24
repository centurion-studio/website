import {IconProps} from './index';
import React from 'react';

export const IconLock = ({style, className}: IconProps): React.JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1"
             className={`icon ${className}`}
             strokeLinejoin="round"
             strokeLinecap="round"
             stroke="currentColor"
             style={style}
             fill="none"
        >
            <rect x="5" y="11" width="14" height="10" rx="2"></rect>
            <circle cx="12" cy="16" r="1"></circle>
            <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
        </svg>
    );
}