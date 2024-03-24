import {IconProps} from './index';
import React from 'react';

export const IconHeartFilled = ({style, className}: IconProps): React.JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5"
             className={`icon ${className}`}
             strokeLinejoin="round"
             strokeLinecap="round"
             stroke="currentColor"
             style={style}
             fill="none"
        >
            <path strokeWidth="0" fill="currentColor" d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0
            1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094
            -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z">
            </path>
        </svg>
    );
}