import ArticleCard from './ArticleCard.jsx'

function Home({ articles }) {
    const featuredArticles = articles.slice(0, 6)

    return (
        <>
            <section>
                <h2>Welcome to NC News</h2>
                <br />
                <p>Your number 1 resource for all things Northcoders!</p>
                <br />
                <h3>Featured Articles</h3>
                <br />
                <ArticleCard articles={featuredArticles} />
            </section>
        </>
    )
}

export default Home;