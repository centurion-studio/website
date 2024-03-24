import React from 'react';

export const ToTopButton = (): React.JSX.Element => {
    const scrollToTop = () => {
        window.scrollTo({
            behavior: 'smooth', /* you can also use 'auto' behaviour in place of 'smooth' */
            top: 0,
        });
    };

    return (
        <button id="to-top-btn" className="to-top-btn" aria-label="Go to top" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width="24"
                 height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                 strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 15 12 9 18 15"></polyline>
            </svg>
        </button>
    );
}