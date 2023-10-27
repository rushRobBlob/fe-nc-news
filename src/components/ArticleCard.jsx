import { Link } from "react-router-dom"
import { dateFormat } from '../utils/utils.js'

function ArticleCard({ articles }) {

    return (
        <>
            <article>
                <ul className="articleLayout">
                    {articles.map((article, index) => {
                        return (
                            <Link to={`/articles/${article.article_id}`} className="articleListLink" key={article.article_id}>
                                <li>
                                    <div className="articleContainer">
                                        <div className="articleImgContainer">
                                            <img className="articleImg" src={article.article_img_url} alt="" />
                                        </div>
                                        <div className="articleContentContainer">
                                            <div className="titleContainer">
                                                <h4 className="articleTitle">{article.title}</h4>
                                            </div>
                                            <div className="infoContainer">
                                                <p className="articleUsername">{article.author}</p>

                                                <p className="articleDate">Posted: {dateFormat(article.created_at)}</p>
                                                <span className="articleC">Comments: {article.comment_count}</span>
                                                <span className="articleVotes">Votes: {article.votes}</span>

                                            </div>


                                        </div>

                                    </div>


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