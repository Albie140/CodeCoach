import React from "react";

function Main(props) {
	return (
		<main className="mt-3">
			{props.children}
		</main>
	);
}

export default Main;