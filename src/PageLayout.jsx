import { Outlet } from "react-router";
import { useTheme } from "./context/ThemeContext";
import { CiDark, CiLight } from "react-icons/ci";

export default function PageLayout() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return (
        <div className={`p-8 min-h-dvh font-minimal bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 ${isDarkTheme ? "dark" : ""}`}>
            <button className="fixed top-5 right-5 bg-slate-400 rounded-full p-2 sm:scale-150 dark:text-slate-200" onClick={toggleTheme}>
                {isDarkTheme ? <CiLight /> : <CiDark />}
            </button>
            <Outlet />
        </div>
    );
}
