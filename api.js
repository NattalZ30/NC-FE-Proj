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