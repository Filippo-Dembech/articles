import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function strToBool(str) {
    return str.toLowerCase() === "true"
}

function ThemeProvider(props) {
    
    const [isDarkTheme, setIsDarkTheme] = useState(() => strToBool(localStorage.getItem("isDarkTheme")));

    const toggleTheme = () => {
        setIsDarkTheme(curr => !curr)
    }

    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme)
    }, [isDarkTheme])

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}


function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("'useTheme()' called outside ThemeContext")
    return context;
}

export { ThemeProvider, useTheme }