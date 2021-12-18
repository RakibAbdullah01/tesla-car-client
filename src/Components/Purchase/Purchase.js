import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Purchase = () => {
	const { user } = useAuth();
	const { id } = useParams();

	const history = useHistory();

	const [item, setItem] = useState({});
	// Get Package Details
	useEffect(() => {
		axios
			.get(`https://enigmatic-sierra-10657.herokuapp.com/product/${id}`)
			.then((response) => {
				setItem(response.data);
			});
	}, [user.email]);

	// Book Order
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		data.status = "Pending";
		axios
			.post(`https://enigmatic-sierra-10657.herokuapp.com/orders`, data)
			.then((res) => {
				if (res.data.acknowledged) {
					alert("Order placed SuccessFully!");
					reset();
					history.replace("/");
				}
			});
	};

	console.log(item);
	return (
		<div>
			<Header />

			<div class="container mt-5 text-center">
				<div class="content">
					<div class="row ">
						<div className="col-md-6">
							<div class="image">
								<img className="rounded w-100 p-3" src={item.img} alt="" />
							</div>

							<h3 className="text-center mt-3">{item.name}</h3>

							<div className="details">
								<p className="p-3">{item.description}</p>
							</div>
						</div>

						<div className="col-md-6">
							<h2 className="text-center">
								{" "}
								<b>
									{" "}
									<span style={{ color: "orangered" }}>Purchase</span> Now
								</b>{" "}
							</h2>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="row w-75 mx-auto">
									<div className="col-md-12">
										<input
											{...register("name")}
											defaultValue={user.displayName}
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("email")}
											defaultValue={user.email}
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("address")}
											placeholder="Address"
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("phoneNumber")}
											placeholder="Cell Number"
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("product")}
											defaultValue={item.name}
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>

									<div className="col-md-12">
										<input
											{...register("price")}
											defaultValue={item.price}
											className="p-2 m-2 w-100 rounded border border-success"
										/>
									</div>
								</div>
								{errors.exampleRequired && alert("Something went wrong!")}

								<input
									type="submit"
									value="Purchase Now"
									className="btn btn-warning w-25 mx-auto my-2"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Purchase;
