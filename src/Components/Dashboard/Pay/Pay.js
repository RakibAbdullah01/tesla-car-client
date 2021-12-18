import React from "react";
import "animate.css";

const Pay = () => {
	return (
		<div>
			<h1
				className="w-100 p-3 img-responsive wow slideInRight custom-img animated w-100"
				style={{
					visibility: "visible",
					animationDuration: "2000ms",
					animationDelay: "-5ms",
					animationName: "fadeInBottomLeft",
					fontFamily: "fantasy",
					fontSize: "60px",
				}}
			>
				Payment system{" "}
				<span
					style={{
						color: "orangered",
					}}
				>
					coming soon !
				</span>
			</h1>

			<div
				className="w-100 p-3 text-center img-responsive wow slideInRight custom-img animated w-100"
				style={{
					visibility: "visible",
					animationDuration: "2000ms",
					animationDelay: "-5ms",
					animationName: "fadeInBottomLeft",
				}}
			>
				<h1>
					<span style={{ color: "green", fontSize: "48px" }}>
						<i class="fas fa-smile"></i>
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Pay;
