import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { dateFormat } from "../utils/utils";
import AddComment from './AddComment.jsx'

function CommentCard({ article_id }) {
    const [comments, setComments] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isPosted, setIsPosted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [err, setErr] = useState(false);

    const mainUser = 'tickle122';

    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}/comments`).then(({ data }) => {
            const { comments } = data;
            setComments(comments);
        })
    }, [isPosted, isDeleting]);

    const deleteComment = (comment_id) => {
        setIsDeleting(true);
        axios.delete(`https://nc-news-q2aj.onrender.com/api/comments/${comment_id}`).then((res) => {
            console.log(res);
            setErr(false);
            setIsDeleting(false);
        }).catch(() => {
            setIsDeleting(false);
            setErr(true);

        })
    }

    if (isDeleting) { return <div className="deleteContainer"><h3 className="articleDelete">We are deleting your comment....please wait</h3></div> }
    else {
        return (
            <>
                <ul>
                    {err ? <p>comment was not deleted...please try again</p> : null}
                    {comments.map((comment) => {
                        return (
                            <li className="articleComments" key={comment.comment_id}>
                                <p>User <span className="fullArticleUser">{comment.author}</span> says...</p>

                                <p className="commentText">"{comment.body}"</p>
                                <div className="commentDateVotes">
                                    <p>Date: {dateFormat(comment.created_at)}</p>
                                    <p>Votes: {comment.votes}</p>
                                </div>
                                {mainUser === comment.author ? <div className="deleteComment"><button onClick={() => deleteComment(comment.comment_id)}>Delete Comment</button></div> : null}

                            </li>
                        )
                    })}
                </ul>


                <AddComment isPosted={isPosted} setIsPosted={setIsPosted} article_id={article_id} />
            </>
        )
    }

}

export default CommentCard;