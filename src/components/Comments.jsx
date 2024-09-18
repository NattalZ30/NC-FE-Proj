import { useEffect, useState } from "react";
import { getComments } from "../../api";

export const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getComments(article_id).then((data) => {
            setComments(data)
        })
    },[article_id])

    return (
        <section className="comment-section">
            {comments.map((comment) => {
                return (
                <div className="comment" key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                </div>
                )}
            )}
        </section>
    )
}

export default Comments;
    