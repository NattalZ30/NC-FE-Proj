import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export const RelatedSection = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((data) => {
            console.log(data)
            setArticles(data)
        })
    },[])

    return (
        <section className="related-section">
            <h2>Related:</h2>
            {articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
            })}
        </section>
    )
}

export default RelatedSection;