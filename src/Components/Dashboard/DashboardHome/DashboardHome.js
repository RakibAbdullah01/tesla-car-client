import React from "react";
import useAuth from "../../../Hooks/useAuth";
import login from "../../../images/login/login.jpg";

const DashboardHome = () => {
	const { user } = useAuth();
	return (
		<section class="sign-in">
			<div class="container">
				<div className="row  align-items-center">
					<div className="col-md-6">
						<div class="signin-content ">
							<div class="signin-image">
								<figure>
									<img src={login} alt="singin" className="w-100" />
								</figure>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div class="signin-form text-center">
							<h2 class="form-title">Welcome</h2>
							<h3>
								<b>
									<span style={{ color: "orangered" }}>{user.displayName}</span>
								</b>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DashboardHome;
