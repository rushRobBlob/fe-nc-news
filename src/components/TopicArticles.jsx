import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ArticleCard from './ArticleCard.jsx';
import axios from "axios";



function TopicArticles({ sortBy, setSortBy }) {
    const { topic } = useParams();
    const [topicArticles, setTopicArticles] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(topic);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://nc-news-q2aj.onrender.com/api/articles?topic=${topic}`).then(({ data }) => {
            const { articles } = data;
            setIsLoading(false);
            setTopicArticles(articles);
        })
    }, [currentTopic]);

    switch (sortBy) {
        case 'dateNew':
            topicArticles.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
            break;
        case 'dateOld':
            topicArticles.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
            break;
        case 'mostComments':
            topicArticles.sort((a, b) => (a.comment_count < b.comment_count) ? 1 : -1);
            break;
        case 'leastComments':
            topicArticles.sort((a, b) => (a.comment_count > b.comment_count) ? 1 : -1);
            break;
        case 'mostVotes':
            topicArticles.sort((a, b) => (a.votes < b.votes) ? 1 : -1);
            break;
        case 'leastVotes':
            topicArticles.sort((a, b) => (a.votes > b.votes) ? 1 : -1);
            break;
    }


    if (isLoading) { return <h1 className="loading">loading...</h1> }
    else {
        return (
            <>
                <h1 className="articlesAll">All Articles</h1>


                <div className="topicContainer">
                    <h3 className="topicHeading">Topics</h3>
                    <nav>
                        <ul className="topicNav">
                            <li><Link onClick={() => { setCurrentTopic('coding') }} className={currentTopic === 'coding' ? 'topicButtClicked' : 'topicButt'} to="/articles/topics/coding">Coding</Link></li>
                            <li><Link onClick={() => { setCurrentTopic('football') }} className={currentTopic === 'football' ? 'topicButtClicked' : 'topicButt'} to="/articles/topics/football">Football</Link></li>
                            <li><Link onClick={() => { setCurrentTopic('cooking') }} className={currentTopic === 'cooking' ? 'topicButtClicked' : 'topicButt'} to="/articles/topics/cooking">Cooking</Link></li>
                        </ul>


                    </nav>
                    <div className="sortBy">
                        <h4>Sort by</h4>
                        <select value={sortBy} name="sortby" id="sortby"
                            onChange={e => setSortBy(e.target.value)}>
                            <option value="dateNew">Date (newest)</option>
                            <option value="dateOld">Date (oldest)</option>
                            <option value="mostComments">Comments (most)</option>
                            <option value="leastComments">Comments (least)</option>
                            <option value="mostVotes">Votes (most)</option>
                            <option value="leastVotes">Votes (least)</option>
                        </select>
                    </div>

                </div>
                <h3 className="articlesAll">{topic[0].toUpperCase() + topic.slice(1)}</h3>

                <ArticleCard articles={topicArticles} />
            </>
        )
    }

}

export default TopicArticles;