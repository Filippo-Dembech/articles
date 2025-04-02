function Brackets(props) {
    return (
        <>
            <code className="text-blue-700 dark:text-blue-600">&lt;</code>{props.children}<code className="text-blue-700 dark:text-blue-600">&gt;</code>
        </>
    )
}

export default function Code({ isComponent, ...props }) {
    
    if (isComponent)
        return (
            <code className=" text-blue-900 dark:text-blue-300"><Brackets>{props.children}</Brackets></code>
        );
    return <code className="px-1 text-blue-900 dark:text-blue-300">{props.children}</code>;
}
