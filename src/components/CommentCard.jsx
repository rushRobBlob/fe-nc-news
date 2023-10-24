import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { dateFormat } from "../utils/utils";

function CommentCard({ article_id }) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}/comments`).then(({ data }) => {
            const { comments } = data;
            setComments(comments);
        })
    }, []);

    return (
        <>
            <ul>
                {comments.map((comment) => {
                    return (
                        <li className="articleComments" key={comment.comment_id}>
                            <p>User <span className="fullArticleUser">{comment.author}</span> says...</p>
                            <br />
                            <p className="commentText">"{comment.body}"</p>
                            <br />
                            <span className="commentDate">Date: {dateFormat(comment.created_at)}</span>
                            <span className="commentVotes">Votes: {comment.votes}</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CommentCard;