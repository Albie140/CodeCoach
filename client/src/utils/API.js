import axios from "axios";

export default {
    getPosts: () => {
        return axios.get("/api/users");
    },
    getPostById: id => {
        return axios.get("/api/users/" + id);
    },
    savePost: () => {
        return axios.post("/api/users");
    },
    updatePost: id => {
        return axios.put("/api/users/" + id);
    },
    removePost: id => {
        return axios.delete("/api/users/" + id);
    }
}