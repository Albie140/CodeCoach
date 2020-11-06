import axios from "axios";

export default {
    getPost: () => {
        return axios.get("/api/post");
    },
    getPostById: id => {
        return axios.get("/api/post" + id);
    },
    savePost: () => {
        return axios.post("/api/post");
    },
    updatePost: id => {
        return axios.put("/api/post" + id);
    },
    removePost: id => {
        return axios.delete("/api/post" + id);
    }
}