import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


function ThemeProvider(props) {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
    const toggleTheme = () => setIsDarkTheme(curr => !curr);
    const toggleDark = () => setIsDarkTheme(true);
    const toggleLight = () => setIsDarkTheme(false);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleDark, toggleTheme, toggleLight }}>
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