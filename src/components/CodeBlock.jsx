import SyntaxHighlighter from "react-syntax-highlighter";
import {
    hopscotch,
    tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "../context/ThemeContext";

export default function CodeBlock(props) {
    const { isDarkTheme } = useTheme();

    const customStyle = isDarkTheme
        ? {
              padding: 20,
          }
        : {
              padding: 20,
              backgroundColor: !isDarkTheme && "oklch(0.968 0.007 247.896)",
          };

    return (
        <SyntaxHighlighter
            className="text-xs scrollbar-none max-w-[600px] sm:text-sm rounded-2xl md:m-auto shadow-md shadow-slate-200 dark:shadow-red-950"
            customStyle={customStyle}
            language="jsx"
            style={isDarkTheme ? hopscotch : tomorrow}
        >
            {props.children}
        </SyntaxHighlighter>
    );
}
