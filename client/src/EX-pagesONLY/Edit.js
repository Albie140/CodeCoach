import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";

function Edit() {
	const params = useParams();

	const [postInfo, setPostInfo] = useState({
		title: "",
		author: "",
		body: ""
	});

	useEffect(() => {
		loadPost();
	}, []);

	useEffect(() => {
		console.log(postInfo);
	}, [postInfo]);

	const loadPost = () => {
		console.log("POST ID!!!");
		console.log(params.id);

		API.getPostById(params.id)
			.then(postData => {
				console.log(postData.data);

				setPostInfo({
					title: postData.data.title,
					author: postData.data.author,
					body: postData.data.body
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	const handleInputChange = event => {
		const { name, value } = event.target;

		console.log("EVENT TARGET");
		console.log(event.target);

		setPostInfo({
			...postInfo,
			[name]: value
		});
	}

	const handleFormSubmit = event => {
		event.preventDefault();

		console.log(postInfo);

		const updatedPost = {
			title: postInfo.title,
			author: postInfo.author,
			body: postInfo.body
		};

		API.updatePost(params.id, updatedPost)
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	}

	return (
		<form method="PUT">
				<div className="form-group">
					<label for="title">Title:</label>
					<input type="text" className="form-control" id="title" name="title" onChange={handleInputChange} value={postInfo.title} />
				</div>
				<div className="form-group">
					<label for="author">Author:</label>
					<input type="text" className="form-control" id="author" name="author" onChange={handleInputChange} value={postInfo.author} />
				</div>
				<div className="form-group">
					<label for="body">Body:</label>
					<textarea className="form-control" id="body" name="body" onChange={handleInputChange} value={postInfo.body} />
				</div>
				<div className="form-group">
					<button className="btn btn-primary" onClick={handleFormSubmit}>Submit Edit</button>
				</div>
			</form>
	);
}

export default Edit;