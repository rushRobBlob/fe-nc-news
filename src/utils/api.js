import axios from "axios";

const request = axios.create({
    baseUrl: "https://nc-news-q2aj.onrender.com/api",
});

export const updateVotes = (value, article_id) => {
    request.patch(`/articles/${article_id}`, { inc_votes: value })
        .then((res) => {
            console.log(res);
        })
}