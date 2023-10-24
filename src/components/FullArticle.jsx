import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { dateFormat } from '../utils/utils.js'

function FullArticle({ articles }) {
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
                <p className="fullArticleDate">Posted: {dateFormat(article[0].created_at)}</p>


                <p className="fullArticleUser">{article[0].author}</p>
                <br />
                <img className="fullArticleImg" src={article[0].article_img_url} alt="" />
                <p className="fullArticleBody">{article[0].body}</p>
                <br />
                <Link className="fullArticleComments"><div >Comments</div></Link>
                <p>Votes: {article[0].votes}</p>
            </div>
        </>
    )

}

export default FullArticle;