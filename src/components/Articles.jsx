import ArticleCard from './ArticleCard.jsx'
import { Link, Routes, Route } from "react-router-dom";
import TopicArticles from './TopicArticles.jsx'


function Articles({ articles }) {

    return (
        <>
            <h1 className="articlesAll">All Articles</h1>
            <div className="topicContainer">
                <h3 className="topicHeading">Topics</h3>
                <nav>
                    <ul className="topicNav">
                        <li><Link className="topicButt" to="/articles/topics/coding">Coding</Link></li>
                        <li><Link className="topicButt" to="/articles/topics/football">Football</Link></li>
                        <li><Link className="topicButt" to="/articles/topics/cooking">Cooking</Link></li>
                    </ul>


                </nav>
            </div>

            <ArticleCard articles={articles} />
        </>
    )
}

export default Articles;