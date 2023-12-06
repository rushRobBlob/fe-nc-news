import { useState } from "react";
import axios from "axios";

function AddComment({ article_id, isPosted, setIsPosted }) {

    const [commentText, setCommentText] = useState('');

    const [buttonState, setButtonState] = useState(true)
    const [err, setErr] = useState(false);

    const postComment = (e) => {
        setButtonState(true);
        e.preventDefault();
        const commentToPost = {
            username: 'tickle122',
            comment: e.target[0].value,
        }

        axios.post(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}/comments`, commentToPost).then((res) => {
            setIsPosted(true);
            setCommentText('')
        }).catch(() => {
            setErr(true);
            setButtonState(false)
        })
    }



    if (isPosted) { return <h4 className="commentAdd">Your comment was posted!</h4> } else {
        return (
            <>
                <div className="commentAdd">

                    <h3 className="commentHead">Add Comment</h3>
                    <form className="commentForm" onSubmit={postComment}>
                        <label className="commentLabel" htmlFor="commentBod">Comment: </label>

                        <textarea className="unpostedCommentText" value={commentText} name="" id="" cols="10" rows="10" required onChange={(e) => {
                            setCommentText(e.target.value)
                            setButtonState(false);
                        }
                        }></textarea>
                        <button disabled={buttonState}>Submit Comment</button>
                    </form>
                    {err ? <p className="commentErr">comment not sent, please try again...</p> : null}
                </div>

            </>
        )
    }


}

export default AddComment;