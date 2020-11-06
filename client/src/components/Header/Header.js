import React from "react";
import { Jumbotron, Button } from 'reactstrap';
import './Header.css';

function Header(props) {
	return (
		<header>
			<Jumbotron className="jumboBanner">
				<h1 className="display-3 font">Welcome username!</h1>
				<p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
				<hr className="my-2" />
				<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			
			</Jumbotron>
			{props.children}
		</header>
	);
}

export default Header;