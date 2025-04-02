export default function ExternalLink({ href, ...props }) {
    return (
        <a href={href} className="text-blue-800 dark:text-blue-500 hover:underline" target="_blank" rel="noreferrer">{props.children}</a>
    )
}