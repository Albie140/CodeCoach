import axios from "axios";

export default {
	getPosts: () => {
		return axios.get("/api/post");
	},
	getPostById: id => {
		return axios.get("/api/post/" + id)
	},
	savePost: newPost => {
		return axios.post("/api/post/", newPost)
	},
	updatePost: (id, updatedPost) => {
		return axios.put("/api/post/" + id, updatedPost)
	},
	removePost: id => {
		return axios.delete("/api/post/" + id)
	}
}