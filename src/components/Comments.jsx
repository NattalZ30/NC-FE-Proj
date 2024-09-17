import { useEffect, useState } from "react";
import { getComments } from "../../api";
import { useParams } from "react-router-dom";

export const Comments = () => {
    const [comments, setComments] = useState([])

    const {article_id} = useParams()

    useEffect(() => {
        getComments(article_id).then((data) => {
            setComments(data)
        })
    },[article_id])

    return (
        <section className="comment-section">
            {comments.map((comment, index) => {
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