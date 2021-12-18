import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "animate.css";

const Contact = () => {
	return (
		<div>
			<div className="head-banner">
				<Header />
			</div>
			<div className="container mt-5">
				<div className="row align-items-center">
					<div className="col-md-6">
						<img
							src="https://i.ibb.co/gT8Vmzt/contact.png"
							alt=""
							className="w-100 p-3 img-responsive wow slideInRight custom-img animated w-100"
							data-wow-delay="5ms"
							data-wow-duration="2000ms"
							style={{
								visibility: "visible",
								animationDuration: "2000ms",
								animationDelay: "-5ms",
								animationName: "slideInRight",
							}}
						/>
					</div>
					<div className="col-md-6">
						<div
							className="p-3 "
							style={{
								visibility: "visible",
								animationDuration: "2000ms",
								animationDelay: "-5ms",
								animationName: "slideInRight",
							}}
						>
							<h2>
								{" "}
								<span style={{ color: "orangered" }}>Get In </span>Touch
							</h2>
							<div className="mb-3">
								<label for="exampleFormControlInput1" className="form-label">
									Email address
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="name@example.com"
								/>
							</div>
							<div className="mb-3">
								<label for="exampleFormControlTextarea1" className="form-label">
									Example textarea
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							</div>

							<button type="button" className="btn btn-warning">
								<i className="fas fa-paper-plane"></i> Send
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
