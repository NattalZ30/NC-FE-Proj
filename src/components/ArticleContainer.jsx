import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import ArticleSection from "./ArticleSection";
import Votes from "./Votes";
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
                return (
                <div>
                <ArticleSection key={article.article_id} article={article} />
                <Votes key={index} article={article} />
                </div>
            )
                
            })}
            <Comments article_id={article_id}/>
        </div>
    )
}

export default ArticleContainer;