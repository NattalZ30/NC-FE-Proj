import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export const HomeContainer = ({searchParams}) => {
    const [articles, setArticles] = useState([])
    const topicQuery = searchParams.get("topic")
    console.log(topicQuery)
    const params = {params:{topic: topicQuery}}


    useEffect(() => {
        getArticles(params).then((data) => {
            setArticles(data)
        })
    },[topicQuery])

    return (
        <div className="home-container">
            {articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
            })}
        </div>
    )
}

export default HomeContainer;