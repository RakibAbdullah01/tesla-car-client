import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "animate.css";

const About = () => {
	return (
		<div>
			<div className="head-banner">
				<Header />
			</div>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-5">
						<h2 className="text-start">
							ABOUT <span style={{ color: "orangered" }}> TESLA </span>{" "}
							DEALERSHIP
						</h2>
						<p className="text-start">
							Tesla, Inc. is an American electric vehicle and clean energy
							company based in Palo Alto, California, United States. Tesla
							designs and manufactures electric cars, battery energy storage
							from home to grid-scale, solar panels and solar roof tiles, and
							related products and services.
						</p>
					</div>
					<div className="col-md-7">
						<section class="section-padding-120 our-services">
							<img
								alt=""
								src="https://i.ibb.co/frrP7Yq/sell.png"
								className="img-responsive wow slideInRight custom-img animated w-100"
								data-wow-delay="5ms"
								data-wow-duration="2000ms"
								style={{
									visibility: "visible",
									animationDuration: "2000ms",
									animationDelay: "-5ms",
									animationName: "slideInRight",
								}}
							/>
						</section>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default About;
