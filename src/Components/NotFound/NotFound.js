import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="text-center">
			<div className="mt-5 pt-5">
				<img
					src="https://i.ibb.co/YyfQDGN/404-452d1226.png"
					alt=""
					className="w-50"
				/>
			</div>
			<div class="text-center mt-2 mb-3">
				<h3 className="m-3">Oops! Page Not Found!</h3>
				<p className="m-3 p-3">
					We’re sorry but we can’t seem to find the page you requested. This
					might be because you have typed the web address incorrectly.
				</p>
				<Link class="btn btn-warning" to="/">
					Back to home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
