import axios from "axios";

const ncNews = axios.create({
    baseURL: "https://nzamgk.onrender.com/api",
});

export const getTopics = () => {
    return ncNews.get("/topics").then(({data}) => data.topics)
}

export const getArticles = (query) => {
    return ncNews.get("/articles", query).then(({data}) => data.articles)
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

export const postComment = (article_id, body) => {
    return ncNews.post(`/articles/${article_id}/comments`, {body, username: "jessjelly"
     }).then(({data}) => data.comment)
}

export const deleteComment = (comment_id) => {
    return ncNews.delete(`/comments/${comment_id}`).then(({data}) => data.comment)
}