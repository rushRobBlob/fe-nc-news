import ArticleCard from './ArticleCard.jsx'

function Articles({ articles }) {

    return (
        <>
            <h1 className="articlesAll">All Articles</h1>
            <br />
            <ArticleCard articles={articles} />
        </>
    )
}

export default Articles;