import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import login from "../../images/login/login.jpg";
import Header from "../Header/Header";
import "./Login.css";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import Button from "@restart/ui/esm/Button";

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { loginUser, signInWithGoogle, user } = useAuth();

	const loaction = useLocation();
	const history = useHistory();

	if (user.email) {
		// redirect
		history.replace("/dashboard");
	}
	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginDate = { ...loginData };
		newLoginDate[field] = value;
		setLoginData(newLoginDate);
	};
	const handleLoginSUbmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, loaction, history);
	};
	const handleGoogleSignIn = () => {
		signInWithGoogle(loaction, history);
	};

	return (
		<div>
			<>
				<Header />

				<div className="container mt-5">
					<div className="row w-100 align-items-center text-center">
						<div className="col-md-6">
							<img src={login} alt="login" className="w-100" />
						</div>

						<div className="col-md-6 d-flex flex-column align-items-center">
							<div className="mx-auto">
								<h1 style={{ fontSize: "48px" }}>
									{" "}
									<b>
										Please <span style={{ color: "orangered" }}>Login</span>{" "}
									</b>{" "}
								</h1>
							</div>
							<form onSubmit={handleLoginSUbmit} className="w-50">
								<div className="form-group">
									<input
										type="text"
										name="email"
										id="email"
										onChange={handleOnChange}
										placeholder="Your Email"
										className="my-3 p-1 w-100"
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										name="password"
										id="password"
										onChange={handleOnChange}
										placeholder="Password"
										className="my-3 mt-0 p-1 w-100"
									/>
								</div>
								<div className="form-group form-button">
									<input
										type="submit"
										name="signin"
										id="signin"
										className="w-100 btn btn-success"
										value="Log in"
									/>
								</div>
							</form>

							<p className="my-2">-------------- Or --------------</p>

							<Button
								onClick={handleGoogleSignIn}
								className="btn btn-success w-50"
							>
								Login with Google
							</Button>

							<Link
								to="/register"
								className="my-2"
								style={{ color: "orangered" }}
							>
								<b>
									<i>Didn't have any account???</i>
								</b>
							</Link>
						</div>
					</div>
				</div>

				<ToastContainer />

				<Footer />
			</>
		</div>
	);
};

export default Login;
