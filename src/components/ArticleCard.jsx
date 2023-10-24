import { Link } from "react-router-dom"
import { dateFormat } from '../utils/utils.js'

function ArticleCard({ articles }) {

    return (
        <>
            <article>
                <ul>
                    {articles.map((article, index) => {
                        return (
                            <Link to={`/articles/${article.article_id}`} className="articleListLink" key={article.article_id}>
                                <li>
                                    <div className="articleContainer">
                                        <div className="articleImgContainer">
                                            <img className="articleImg" src={article.article_img_url} alt="" />
                                        </div>
                                        <div className="articleContentContainer">
                                            <h4>{article.title}</h4>
                                            <p className="articleUsername">{article.author}</p>

                                            <p className="articleDate">Posted: {dateFormat(article.created_at)}</p>

                                            <p className="articleVotes">Votes: {article.votes}</p>

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