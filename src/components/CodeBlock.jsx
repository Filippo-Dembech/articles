import SyntaxHighlighter from "react-syntax-highlighter";
import {
    hopscotch,
    tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "../context/ThemeContext";

export default function CodeBlock(props) {
    const { isDarkTheme } = useTheme();


    return (
        <SyntaxHighlighter
            className="text-xs scrollbar-none max-w-[600px] sm:text-sm rounded-2xl md:m-auto shadow-md shadow-gray-400 dark:shadow-gray-950"
            customStyle={{ padding: 20 }}
            language="jsx"
            style={isDarkTheme ? hopscotch : tomorrow}
        >
            {props.children}
        </SyntaxHighlighter>
    );
}
