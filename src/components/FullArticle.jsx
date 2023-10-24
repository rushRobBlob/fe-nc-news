import { Routes, Route, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { dateFormat } from '../utils/utils.js'
import CommentCard from './CommentCard.jsx'

function FullArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState(['hello'])


    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}`).then(({ data }) => {
            const { article } = data;
            setArticle([article]);
        })

    }, []);


    return (
        <>
            <div className="fullArticleContainer">
                <h1 className="fullArticleTitle">{article[0].title}</h1><br />
                <p className="fullArticleDate">Posted on: {dateFormat(article[0].created_at)}</p>
                <p className="fullArticleAuth">by: <span className="fullArticleUser">{article[0].author}</span></p>
                <br />
                <br />
                <img className="fullArticleImg" src={article[0].article_img_url} alt="" />
                <br />
                <br />
                <p className="fullArticleBody">{article[0].body}</p>
                <br />

                <p>Votes: {article[0].votes}</p>

                <br />

                <h3 className="comments">Comments:</h3>
                <br />
                <CommentCard article_id={article_id} />


            </div>

        </>
    )

}

export default FullArticle;