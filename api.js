import axios from "axios";

const ncNews = axios.create({
    baseURL: "https://nzamgk.onrender.com/api",
});

export const getTopics = () => {
    return ncNews.get("/topics").then(({data}) => data.topics)
}

export const getArticles = () => {
    return ncNews.get("/articles").then(({data}) => data.articles)
}

export const getArticleById = (article_id) => {
    return ncNews.get(`/articles/${article_id}`).then(({data}) => data.articles)
}

export const getComments = (article_id) => {
    return ncNews.get(`/articles/${article_id}/comments`).then(({data}) => data.comments)
}

export const updateVotes = (article_id, increment) => {
    return ncNews.patch(`/articles/${article_id}`, {inc_votes: increment }).then(({data}) => data.update)
}