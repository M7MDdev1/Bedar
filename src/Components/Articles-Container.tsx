import articlesData from '../data/Articles.json';
import ArticlesCards from './Articles-Cards';

interface Article {
    id: number;
    title: string;
}

interface ArticlesData {
    articles: Article[];
}

export default function ArticlesContainer () {
    const { articles } = articlesData as ArticlesData;

    return (
        <div className="flex flex-col gap-[18px] mt-10">
            {articles.map((article) => (
            <ArticlesCards
                key={article.id}
                id={article.id}
                title={article.title}
            />
            ))}
        </div>
    );
};