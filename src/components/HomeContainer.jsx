import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export const HomeContainer = ({searchParams}) => {
    const [articles, setArticles] = useState([])
    const [sortBy, setSortBy] = useState("created_at")
    const [order, setOrder] = useState("DESC")
    const topicQuery = searchParams.get("topic")
    const params = {params:{sort_by: sortBy, order, topic: topicQuery}}

    function handleSortBy(event){
        setSortBy(event.target.value)
        params.params.sort_by = sortBy
    }

    function handleOrder(event){
        setOrder(event.target.value)
        params.params.order = order
    }

    useEffect(() => {
        getArticles(params).then((data) => {
            setArticles(data)
        })
    },[sortBy,order,topicQuery])

    return (
        <>
        <div className="sort-dropdowns">
            <label htmlFor="sort_by">Sort by:</label>
            <select onChange={handleSortBy} name="sort_by" id="sort-by-dropdown">
                <option value="created_at" selected>created at</option>
                <option value="comment_count">comment count</option>
                <option value="votes">votes</option>
            </select>
            <label htmlFor="order">Sort by:</label> 
            <select onChange={handleOrder}  name="order" id="order-dropdown">
                <option value="ASC">lowest-highest</option>
                <option value="DESC" selected>highest-lowest</option>
            </select> 
        </div>
        <div className="home-container">
            {articles.map((article, index) => {
                return <ArticleCard key={index} article={article} />
            })}
        </div>
        </>
    )
}

export default HomeContainer;