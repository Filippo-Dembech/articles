import ArticleCard from "./ArticleCard";
import Title from "./components/Title";

export default function ArticlesPage() {
    return (
        <div>
            <Title
                variant="h1"
                className="mb-5"
            >
                Articles
            </Title>
            <div className="flex flex-col">
                <ArticleCard
                    title="Render Pattern"
                    to="/render-pattern"
                    description="Make the client code more flexible by giving them access to your component internal state without compromise it."
                />
            </div>
        </div>
    );
}
