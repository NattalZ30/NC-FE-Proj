import { useEffect, useState } from "react";
import { getComments } from "../../api";

export const Comments = ({article_id}) => {
    const [commentInput, setCommentInput] = useState("")
    const [newComment, setNewComment] = useState("")
    
    useEffect(() => {
        getComments(article_id).then((data) => {
            setComments(data)
        })
    },[article_id, newComment])

    const handleChange = (e) => {
        setCommentInput(e.target.value);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setNewComment(commentInput);
        setCommentInput("");
      };

    return (
        <section className="comment-section">
            <form className="poke-search" onSubmit={handleSubmit}>
                <label htmlFor="poke-input">
                    Add Comment:
                    <input
                    name="poke-input"
                    onChange={handleChange}
                    value={searchInput}
                    ></input>
                </label>
                <button>Search</button>
            </form>
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
    