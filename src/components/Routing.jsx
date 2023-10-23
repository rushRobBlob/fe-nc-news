import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import axios from 'axios';
import Articles from './Articles.jsx'
// import AboutUs from './AboutUs.jsx'


function Routing() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('https://nc-news-q2aj.onrender.com/api/articles').then(({ data }) => {
            const { articles } = data;
            setArticles(articles);
        })
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<Home articles={articles} />} />
                <Route path="/home" element={<Home articles={articles} />} />
                <Route path="/articles" element={<Articles articles={articles} />} />
                {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            </Routes>
        </>
    )
}

export default Routing;