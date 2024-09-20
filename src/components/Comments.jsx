import { useEffect, useState } from "react";
import { getComments, postComment, deleteComment } from "../../api";

export const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState("")
    
    useEffect(() => {
        getComments(article_id).then((data) => {
            setComments(data)
        })
    },[comments])

    const handleChange = (e) => {
        setCommentInput(e.target.value);
      };
    
    const handleDelete = (comment_id) => {
        deleteComment(comment_id).then(()=>{
            const updatedComments = comments.filter((comment) => comment.comment_id !== comment_id);
            setComments(updatedComments);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = commentInput;
        setComments([newComment, ...comments]) 
        setCommentInput("");
        postComment(article_id, newComment).then((data) => setComments(data, ...comments))
      };

    return (
        <section className="comment-section">
            <form className="new-comment" onSubmit={handleSubmit}>
                <label htmlFor="comment-input">
                    Add Comment:
                    <input
                    name="comment-input"
                    onChange={handleChange}
                    value={commentInput}
                    ></input>
                </label>
                <button>Add</button>
            </form>
            {comments.map((comment) => {
                return (
                <div className="comment" key={comment.comment_id}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <button onClick={()=>{handleDelete(comment.comment_id)}}>X</button>
                </div>
                )}
            )}
        </section>
    )
}

export default Comments;
    