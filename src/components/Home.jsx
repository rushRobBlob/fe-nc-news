import ArticleCard from './ArticleCard.jsx'

function Home({ articles }) {
    const featuredArticles = articles.slice(6, 11)

    return (
        <>
            <section className="homeHeader">
                <h2>Welcome to .nosey!</h2>
                <br />
                <p>Your number 1 resource for having a .nosey</p>
                <br />
                <h3 className="featArt">Featured Articles</h3>
                <br />
            </section>
            <ArticleCard articles={featuredArticles} />
        </>
    )
}

export default Home;