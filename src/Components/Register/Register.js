import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import login from "../../images/login/login.jpg";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
import { Alert } from "react-bootstrap";

const Register = () => {
	const [loginData, setLoginData] = useState({});

	const { user, registerUser } = useAuth();

	const history = useHistory();

	const handlaOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginDate = { ...loginData };
		newLoginDate[field] = value;
		setLoginData(newLoginDate);
	};
	const handleLoginSubmit = (e) => {
		if (loginData.password !== loginData.password2) {
			// alert("Your Password did't match")
			toast.info("Your Password did't matched!");
			e.preventDefault();
			return;
		}
		console.log(loginData);
		registerUser(loginData.email, loginData.password, loginData.name, history);
		e.preventDefault();
	};

	return (
		<>
			<Header />

			<div className="container mt-5">
				<div className="row text-center align-items-center">
					<div className="col-md-6">
						<h2>
							<b>
								Please <span style={{ color: "orangered" }}>Create</span> Your
								Account
							</b>
						</h2>
						<form onSubmit={handleLoginSubmit} className="mb-2">
							<div className="form-group">
								<input
									onChange={handlaOnBlur}
									type="text"
									name="name"
									id="name"
									placeholder="Enter user name"
									className="my-3 p-1 w-50"
								/>
							</div>
							<div className="form-group">
								<input
									onChange={handlaOnBlur}
									type="email"
									name="email"
									id="email"
									placeholder="Enter user email"
									className="my-3 mt-0 p-1 w-50"
								/>
							</div>
							<div className="form-group">
								<input
									onChange={handlaOnBlur}
									type="password"
									name="password"
									id="pass"
									placeholder="Enter your password"
									className="my-3 mt-0 p-1 w-50"
								/>
							</div>
							<div className="form-group">
								<input
									onChange={handlaOnBlur}
									type="password"
									name="password2"
									id="re_pass"
									placeholder="Re-enter your password"
									className="my-3 mt-0 p-1 w-50"
								/>
							</div>

							<div className="form-group form-button">
								<input
									type="submit"
									name="signup"
									id="signup"
									className="btn btn-success w-50"
									value="Register"
								/>
							</div>
						</form>
						<Link to="/login" className="my-2" style={{ color: "orangered" }}>
							<b>
								<i>Already have an account???</i>
							</b>
						</Link>
					</div>
					<div className="col-md-6">
						<img src={login} alt="sing-up" className="w-100" />
					</div>
				</div>
			</div>
			{/* {
            user.email && (
                toast.success("Created User Successfull!")
            )
        }
        {
            authError && (
                toast.error(authError)
            )
        } */}

			<ToastContainer />

			<Footer />
		</>
	);
};

export default Register;
