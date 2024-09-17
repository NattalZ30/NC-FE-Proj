import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import ArticleSection from "./ArticleSection";
import Comments from "./Comments";

export const ArticleContainer = () => {
    const [articles, setArticles] = useState([])

    const {article_id} = useParams()

    useEffect(() => {
        getArticleById(article_id).then((data) => {
            setArticles(data)
        })
    },[])

    return (
        <div className="article-container">
            {articles.map((article, index) => {
                return <ArticleSection key={index} article={article} />
            })}
            <Comments />
        </div>
    )
}

export default ArticleContainer;