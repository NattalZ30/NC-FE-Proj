import { Link } from "react-router-dom";
export const ArticleCard = ({article}) => {

    return (
        <div className="article-card">
            <Link to={`articles/${article.article_id}`}>
                <h2>{article.title}</h2>
                <img className="article-image" src={article.article_img_url}/>
            </Link>
        </div>
    )
}

export default ArticleCard;