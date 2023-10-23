import { Link } from "react-router-dom"

function ArticleCard({ articles }) {

    return (
        <>
            <article className="articleContainer">
                <ul>
                    {articles.map((article) => {
                        return (
                            <Link className="articleListLink" key={article.article_id}>
                                <li className="articleCard">

                                    <img className="articleImg" src={article.article_img_url} alt="" />
                                    <h4>{article.title}</h4>
                                    <p className="userName">{article.author}</p>

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