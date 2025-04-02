import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useTheme } from "./context/ThemeContext";

export default function PageLayout() {
    const { isDarkTheme } = useTheme();
    return (
        <div className={`font-minimal bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 ${
                    isDarkTheme ? "dark" : ""
                }`}>
            <Navbar />
            <div
                className="p-8 min-h-dvh"
            >
                <Outlet />
            </div>
        </div>
    );
}
