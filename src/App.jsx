import { BrowserRouter, Route, Routes } from "react-router";
import ArticlesPage from "./ArticlesPage";
import RenderPatternArticle from "./articles/RenderPatternArticle";
import PageLayout from "./PageLayout";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<PageLayout />}>
                        <Route
                            path="/"
                            element={<ArticlesPage />}
                        />
                        <Route
                            path="/render-pattern"
                            element={<RenderPatternArticle />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
