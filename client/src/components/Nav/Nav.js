import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
	const location = useLocation();

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
							Home
        				</Link>
					</li>
					<li className="nav-item">
						<Link to="/add" className={location.pathname === "/add" ? "nav-link active" : "nav-link"}>
							Add New Post
        				</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0 ml-auto">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSearch}>Search</button>
    			</form>
			</div>
		</nav>
	);
}

export default Nav;