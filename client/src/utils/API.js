import axios from "axios";

export default {
    getUsers: () => {
        return axios.get("/api/users");
    },
    getUserById: id => {
        return axios.get("/api/users/" + id);
    },
    getUserByNameTest: name => {
        return axios.get("/api/users/name/"+ name);
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
    savePost: newPost => {
        console.log("Saving Post")
        return axios.post("/api/post", newPost);
    },
    updatePost: id => {
        return axios.put("/api/post/" + id);
    },
    removePost: id => {
        return axios.delete("/api/post/" + id);
    },
    getAllUngradedPosts: grade => {
        console.log("Getting all Ungraded Posts")
        return axios.get("/api/post/ungraded/" + grade);
    },
    getAllPostsByUser: user => {
        return axios.get("/api/post/" + user);
    }
}