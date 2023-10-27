import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from './ArticleCard.jsx';
import axios from "axios";



function TopicArticles() {
    const { topic } = useParams();
    const [topicArticles, setTopicArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles?topic=${topic}`).then(({ data }) => {
            const { articles } = data;
            setIsLoading(false);
            setTopicArticles(articles);
        })
    }, []);




    if (isLoading) { return <h1 className="loading">loading...</h1> }
    else {
        return (
            <>
                <h1 className="articlesAll">All Articles</h1>
                <h3 className="articlesAll">{topic[0].toUpperCase() + topic.slice(1)}</h3>



                <ArticleCard articles={topicArticles} />
            </>
        )
    }

}

export default TopicArticles;