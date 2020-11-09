import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Add() {
	const [postInfo, setPostInfo] = useState({
		title: "",
		author: "",
		body: ""
	});

	useEffect(() => {
		console.log(postInfo);
	}, [postInfo]);

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

		const newPost = {
			title: postInfo.title,
			author: postInfo.author,
			body: postInfo.body
		};

		API.savePost(newPost)
			.then(data => {
				console.log(data);
			})
			.catch(err => console.log(err));
	}

	return (
		<form method="POST">
				<div className="form-group">
					<label for="title">Title:</label>
					<input type="text" className="form-control" id="title" name="title" onChange={handleInputChange} />
				</div>
				<div className="form-group">
					<label for="author">Author:</label>
					<input type="text" className="form-control" id="author" name="author" onChange={handleInputChange} />
				</div>
				<div className="form-group">
					<label for="body">Body:</label>
					<textarea className="form-control" id="body" name="body" onChange={handleInputChange} />
				</div>
				<div className="form-group">
					<button className="btn btn-primary" onClick={handleFormSubmit}>Add New Post</button>
				</div>
			</form>
	);
}

export default Add;