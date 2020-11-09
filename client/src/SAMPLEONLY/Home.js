import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

function Home(props) {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		loadPosts();
	}, []);

	const loadPosts = () => {
		API.getPosts()
			.then(postData => {
				console.log(postData.data);

				// Limit the results to only matching the ones with the provided search term in the title
				const filteredPosts = postData.data.filter(item => item.title.toLowerCase().includes(props.search.toLowerCase()));

				setBlogPosts(filteredPosts);
			})
			.catch(err => console.log(err));
	}

	const handleDelete = id => {
		API.removePost(id)
			.then(postData => {
				console.log(postData.data);

				loadPosts();
			})
			.catch(err => console.log(err));
	}

	return (
		<section>
			{blogPosts.map((item, i) => {
				console.log("TEST");
				return (
					<>
						<p>Post #{i + 1}</p>
						<Link to={"/edit/" + item._id}>
							<button className="btn btn-secondary">
								EDIT
							</button>
						</Link>
						{" "}
						<button className="btn btn-secondary" onClick={() => handleDelete(item._id)}>DELETE</button>
						<h5>Title: {item.title}</h5>
						<h5>Author: {item.author}</h5>
						<p>{item.body}</p>
					</>
				);
			})}
		</section>
	);
}

export default Home;