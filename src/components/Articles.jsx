import ArticleCard from './ArticleCard.jsx'
import { Link, Routes, Route } from "react-router-dom";
import TopicArticles from './TopicArticles.jsx'
import { useState } from 'react';


function Articles({ articles, sortBy, setSortBy }) {



    switch (sortBy) {
        case 'dateNew':
            articles.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
            break;
        case 'dateOld':
            articles.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
            break;
        case 'mostComments':
            articles.sort((a, b) => (a.comment_count < b.comment_count) ? 1 : -1);
            break;
        case 'leastComments':
            articles.sort((a, b) => (a.comment_count > b.comment_count) ? 1 : -1);
            break;
        case 'mostVotes':
            articles.sort((a, b) => (a.votes < b.votes) ? 1 : -1);
            break;
        case 'leastVotes':
            articles.sort((a, b) => (a.votes > b.votes) ? 1 : -1);
            break;
    }

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

            <ArticleCard articles={articles} />
        </>
    )
}

export default Articles;

