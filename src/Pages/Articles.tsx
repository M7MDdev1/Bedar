import ArticlesContainer from "../Components/Articles-Container";
import ArticlesHeader from "../Components/Articles-Header";

export default function Articles() {
    return (
        <div className="px-4 py-8">
            <ArticlesHeader />
            <ArticlesContainer />
        </div>
    );
}