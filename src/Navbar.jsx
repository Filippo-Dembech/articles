import { Link } from "react-router";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "./context/ThemeContext";

export default function Navbar() {
    const { isDarkTheme, toggleTheme } = useTheme();
    return (
        <nav className="sticky p-4 mb-4 top-0 items-center text-slate-400 bg-slate-900 flex justify-between">
            <Link to="/" className="text-slate-800 bg-slate-400 transition-colors font-bold p-2 rounded-xl dark:text-slate-800 hover:bg-slate-500">Homepage</Link>
            <Link to="/" className="flex items-center gap-3">
                <img className="w-8 rounded-xl" src="icon.jpg" alt="logo.png" />
                <span className="text-3xl font-semibold">FD Articles</span>
            </Link>
            <button className="text-slate-800 bg-slate-400 rounded-full transition-colors p-1 sm:scale-150 dark:text-slate-200 hover:bg-slate-500" onClick={toggleTheme}>
                {isDarkTheme ? <CiLight /> : <CiDark />}
            </button>
        </nav>
    )
}