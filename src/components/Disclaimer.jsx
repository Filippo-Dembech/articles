export default function Disclaimer({ noteText, ...props}) {
    return (
        <div className="bg-gray-200 border-l-8 pl-6 p-5 text-gray-800 rounded-xl dark:text-gray-400 dark:bg-gray-700">
            <span className="uppercase font-bold">{noteText} :</span> <span>{props.children}</span>
        </div>
    )
}