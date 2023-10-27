import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import axios from 'axios';
import Articles from './Articles.jsx'
import FullArticle from './FullArticle.jsx'
import TopicArticles from './TopicArticles.jsx'
import CommentCard from './CommentCard.jsx'
// import AboutUs from './AboutUs.jsx'


function Routing() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        axios.get('https://nc-news-q2aj.onrender.com/api/articles').then(({ data }) => {
            const { articles } = data;
            setArticles(articles);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <h1 className="loading">loading...</h1>
    } else {
        return (

            <>
                <Routes>
                    <Route path="/" element={<Home articles={articles} />} />
                    <Route path="/home" element={<Home articles={articles} />} />
                    <Route path="/articles" element={<Articles articles={articles} />} />
                    <Route path="/articles/:article_id/*" element={<FullArticle />} />
                    <Route path="/articles/topics/:topic" element={<TopicArticles />} />
                </Routes>
            </>
        )

    }
}

export default Routing;