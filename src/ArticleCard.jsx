import { Link } from "react-router";
import Title from "./components/Title";
import { MdArticle } from "react-icons/md";

export default function ArticleCard({ title, to, description }) {
    return (
        <Link to={to} className="p-4 rounded-lg relative bg-slate-300 cursor-pointer shadow-none transition-all hover:translate-y-[-3px] hover:shadow-md dark:bg-slate-700">
            <p className="text-slate-400 italic flex gap-3 items-center"><MdArticle className="scale-150"/> READ</p>
            <Title variant="h2" className="my-3">{title}</Title>
            <p>{description}</p>
        </Link>
    )
}