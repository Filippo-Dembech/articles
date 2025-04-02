export default function Title({variant, className, ...props}) {
    if (variant === "h1") return (
        <h1 className={`font-semibold text-5xl border-b-2 border-slate-700 dark:border-slate-400 pb-3 ${className}`}>{props.children}</h1>
    )
    if (variant === "h2") return (
        <h2 className={`text-4xl ${className}`}>{props.children}</h2>
    )
    if (variant === "h3") return (
        <h3 className={`text-3xl ${className}`}>{props.children}</h3>
    )
    if (variant === "h4") return (
        <h4 className={`text-2xl ${className}`}>{props.children}</h4>
    )
    if (variant === "h5") return (
        <h5 className={`text-xl ${className}`}>{props.children}</h5>
    )
    if (variant === "h6") return (
        <h6 className={`text-lg ${className}`}>{props.children}</h6>
    )
}