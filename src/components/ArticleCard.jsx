import { Link } from "react-router-dom"
import { dateFormat } from '../utils/utils.js'

function ArticleCard({ articles }) {
    // console.log(articles[0].created_at.slice(0, 9));
    return (
        <>
            <article className="articleContainer">
                <ul>
                    {articles.map((article, index) => {
                        return (
                            <Link to={`/articles/${article.article_id}`} className="articleListLink" key={article.article_id}>
                                <li className="articleCard">

                                    <img className="articleImg" src={article.article_img_url} alt="" />
                                    <h4>{article.title}</h4>
                                    <p className="articleUsername">{article.author}</p>
                                    <p className="articleTopic">{article.topic}</p>
                                    <p className="articleDate">Posted: {dateFormat(article.created_at)}</p>
                                    <p className="articlesComments">Comments: {article.comment_count}</p>
                                    <p className="articleVotes">Votes: {article.votes}</p>


                                </li>
                            </Link>

                        )
                    })}
                </ul>
            </article>
        </>
    )
}

export default ArticleCard;