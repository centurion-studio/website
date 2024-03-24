import {IconProps} from './index';
import React from 'react';

export const IconMoon = ({style, className}: IconProps): React.JSX.Element => {
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
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
            <path d="M19 11h2m-1 -1v2"></path>
        </svg>
    );
}