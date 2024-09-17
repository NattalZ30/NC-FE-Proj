import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export const HomeContainer = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((data) => {
            console.log(data)
            setArticles(data)
        })
    },[])

    return (
        <div className="home-container">
            {articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
            })}
        </div>
    )
}

export default HomeContainer;