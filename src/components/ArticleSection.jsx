
export const ArticleSection = ({article}) => {

    return (
        <div className="article-page-card">
            <h2>{article.title}</h2>
            <img className="article-page-image" src={article.article_img_url}/>
            <p>{article.body}</p>
        </div>
    )
}
export default ArticleSection;