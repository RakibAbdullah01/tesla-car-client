import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import google from "../../images/download/google.JPG";
import apple from "../../images/download/apple.JPG";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer text-lg-start text-sm-center mt-5">
			<div className="container text-white">
				<div className="row py-3">
					<div className="col-md-4">
						<div className="d-flex flex-row align-items-center ">
							<img src={logo} alt="" width="30" />
							<h1>TESLA</h1>
						</div>
						<p className="text-start p-2">
							TESLA is an Automotive Vehicles Company. There is no need to
							driving. It's an automative driving vehicles.
						</p>
						<div className="text-center">
							<i className="fab fa-facebook p-2"></i>
							<i className="fab fa-twitter p-2"></i>
							<i className="fab fa-instagram p-2"></i>
							<i className="fab fa-linkedin p-2"></i>
							<i className="fab fa-google p-2"></i>
							<i className="fab fa-youtube p-2"></i>
						</div>
					</div>
					<div className="col-md-4">
						<h1 className="text-center">Quick Links</h1>
						<div className="row ">
							<div className="col-md-2"></div>
							<div className="col-md-4">
								<ul className="d-flex flex-column">
									<Link style={{ textDecoration: "none" }} to="/home">
										Home
									</Link>
									<Link style={{ textDecoration: "none" }} to="/about">
										About us
									</Link>
									<Link style={{ textDecoration: "none" }} to="/contact">
										Contact
									</Link>
									<Link style={{ textDecoration: "none" }} to="/home">
										Home
									</Link>
								</ul>
							</div>
							<div className="col-md-4">
								<ul className="d-flex flex-column">
									<Link style={{ textDecoration: "none" }} to="/home">
										Home
									</Link>
									<Link style={{ textDecoration: "none" }} to="/about">
										About us
									</Link>
									<Link style={{ textDecoration: "none" }} to="/contact">
										Contact
									</Link>
									<Link style={{ textDecoration: "none" }} to="/home">
										Home
									</Link>
								</ul>
							</div>
							<div className="col-md-2"></div>
						</div>
					</div>
					<div className="col-md-4 text-center">
						<h1>Get Our Apps</h1>
						<div className="d-flex flex-row">
							<img className="w-50 p-3" src={google} alt="" />
							<img className="w-50 p-3" src={apple} alt="" />
						</div>
					</div>
				</div>
			</div>
			<footer className="under-footer">
				<div className="text-center">
					<p className="text-white">
						©️ All Copyrigths reserved by{" "}
						<span style={{ color: "orangered" }}>Abdullah Al Rakib</span>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
