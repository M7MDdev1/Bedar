import axios from "axios";
import ArticlesCards from "./Articles-Cards";
import { useEffect, useState } from "react";

interface Article {
  id: string;
  auther: string;
  title: string;
  date: string;
  time: string;
  content: string;
}

export default function ArticlesContainer() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState("");

  const getArticles = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}/articles`
      );
      setArticles(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-[18px] sm:gap-8 mt-10 sm:mx-20 sm:grid-cols-3 sm:grid">
      <input
        type="text"
        placeholder="ابحث بعنوان المقالة للوصول بشكل اسرع"
        className="w-[705px] col-span-3 mx-auto hidden sm:block px-4 py-3 rounded-lg text-right outline-none placeholder-primary border border-primary mb-[124px]"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredArticles.length > 0 ? (
        articles.map((article) => (
          <ArticlesCards
            key={article.id}
            id={article.id}
            auther={article.auther}
            title={article.title}
            date={article.date}
            time={article.time}
            content={article.content}
          />
        ))
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}
