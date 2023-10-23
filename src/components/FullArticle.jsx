import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function FullArticle({ articles }) {
    const { article_id } = useParams();
    const [article, setArticle] = useState(['hello'])
    const articleIDs = articles.map((article) => {
        return article.article_id;
    })
    const actualID = articleIDs[article_id - 1];

    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles/${actualID}`).then(({ data }) => {
            const { article } = data;
            setArticle([article]);
        })

    }, []);

    return (
        <>
            <h1>{article[0].title}</h1>
            <img src={article[0].article_img_url} alt="" />
            <p>{article[0].body}</p>
        </>
    )

}

export default FullArticle;