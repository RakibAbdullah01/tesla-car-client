/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";
import "animate.css";
import ProductShow from "../ProductShow/ProductShow";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
	return (
		<div>
			<div className="head-banner">
				<Header />
			</div>

			{/* 6 Products */}
			<div className="mt-4 container text-center">
				<h2>
					Latest <span style={{ color: "orangered" }}>Featured</span> Cars
				</h2>
				<p>
					Seven new-car safety features becoming must-haves in 2021 and thats we
					have.
				</p>

				<ProductShow />
			</div>
			{/* Reviews */}
			<div className="mt-4 container text-center">
				<h2>
					<b>
						<span style={{ color: "orangered" }}>Testimonials</span>
					</b>
				</h2>
				<CustomerReview />
			</div>

			{/* CAR INSPECTION */}
			<section className="car-inspection section-padding">
				<div className="container">
					<div className="row g-5 align-items-center">
						<div className="col-md-6 col-sm-6 col-xs-12 gx-1 nopadding hidden-sm">
							<img
								src="https://i.ibb.co/QChcG4q/car-in-red.png"
								alt=""
								className="w-100"
								style={{
									visibility: "visible",
									animationDuration: "2000ms",
									animationDelay: "-5ms",
									animationName: "slideInLeft",
								}}
							/>
						</div>
						<div className="col-md-6 col-sm-12 col-xs-12 nopadding p-3">
							<div className="call-to-action-detail-section text-start">
								<div className="heading-2">
									<h3>Why You Choose Our Car ?</h3>
									<h2>
										Car <span style={{ color: "tomato" }}>Inspection</span>
									</h2>
								</div>
								<p>
									Our CarSure experts inspect the car on over 200 checkpoints so
									you get complete satisfaction and peace of mind before buying.{" "}
								</p>
								<div className="row">
									<div className="col-md-6">
										<ul>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Transmission
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Steering
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Engine
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Tires
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Lighting
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Interior
											</li>
										</ul>
									</div>
									<div className="col-md-6">
										<ul>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Suspension
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Exterior
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Brakes
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Air Conditioning
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Engine Diagnostics
											</li>
											<li>
												{" "}
												<i
													className="fa fa-check"
													style={{ color: "tomato" }}
												></i>{" "}
												Wheel Alignment
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
