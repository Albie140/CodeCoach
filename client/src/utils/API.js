import axios from "axios";

export default {
    getUsers: () => {
        return axios.get("/api/users");
    },
    getUserById: id => {
        return axios.get("/api/users/" + id);
    },
    saveUser: () => {
        return axios.post("/api/users");
    },
    updateUser: id => {
        return axios.put("/api/users/" + id);
    },
    removeUser: id => {
        return axios.delete("/api/users/" + id);
    },
    getPosts: () => {
        return axios.get("/api/post");
    },
    getPostById: id => {
        return axios.get("/api/post/" + id);
    },
    savePost: () => {
        return axios.post("/api/post");
    },
    updatePost: id => {
        return axios.put("/api/post/" + id);
    },
    removePost: id => {
        return axios.delete("/api/post/" + id);
    },
    getAllUngradedPosts: id => {
        return axios.get("/api/post/ungraded");
    },
    getAllPostsByUser: user => {
        return axios.get("/api/post/" + user);
    }
}