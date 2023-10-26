import { Routes, Route, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { dateFormat } from '../utils/utils.js'
import CommentCard from './CommentCard.jsx'
import Voter from './Voter.jsx'

function FullArticle() {
    const { article_id } = useParams();
    const [article, setArticle] = useState(['hello'])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles/${article_id}`).then(({ data }) => {
            const { article } = data;
            setArticle([article]);
            setIsLoading(false);
        })

    }, []);

    if (isLoading) {
        return <h1 className="loading">loading...</h1>
    } else {
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


                    <Voter votes={article[0].votes} article_id={article_id} />
                    <br />

                    <h3 className="comments">Comments:</h3>
                    <br />
                    <CommentCard article_id={article_id} />


                </div>

            </>
        )
    }


}

export default FullArticle;