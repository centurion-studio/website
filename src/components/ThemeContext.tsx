import React from 'react';

export type Scheme = 'dark' | 'light';
const SCHEME_LOCAL_STORAGE_KEY: string = 'centurion-website-theme'

const setScheme = (value: Scheme): void => {
    document.body.setAttribute('data-scheme', value);
}

const getScheme = (): Scheme => {
    const theme: string | null = localStorage.getItem(SCHEME_LOCAL_STORAGE_KEY);
    if (theme !== null) {
        return theme === 'dark' ? 'dark' : 'light';
    }

    const darkThemeMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMediaQuery.matches) {
        localStorage.setItem(SCHEME_LOCAL_STORAGE_KEY, 'dark');
        setScheme('dark');
        return 'dark';
    }

    localStorage.setItem(SCHEME_LOCAL_STORAGE_KEY, 'light');
    setScheme('light');
    return 'light';
};


export interface ThemeContextType {
    scheme: Scheme;
    setScheme: (value: Scheme) => void;
    toggleScheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({children}: React.PropsWithChildren<object>): React.JSX.Element => {
    const [scheme, setSchemeValue] = React.useState<Scheme>(getScheme);


    React.useEffect((): void => {
        const refreshTheme = (): void => {
            localStorage.setItem(SCHEME_LOCAL_STORAGE_KEY, scheme);
            setScheme(scheme);
        };

        refreshTheme();
    }, [scheme]);

    const toggleScheme = (): void => setSchemeValue((scheme: string): Scheme => {
        const value: Scheme = scheme === 'dark' ? 'light' : 'dark';
        setScheme(value);
        return value;
    });

    return (
        <ThemeContext.Provider value={{scheme: scheme, setScheme: setSchemeValue, toggleScheme: toggleScheme}}>
            {children}
        </ThemeContext.Provider>
    );
}