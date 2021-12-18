import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = (data) => {
		axios
			.post(`https://enigmatic-sierra-10657.herokuapp.com/products`, data)
			.then((res) => {
				if (res.data.acknowledged) {
					alert("Product Added Successfully!");
					reset();
				}
			});
	};
	return (
		<div class="container">
			<div class="content ">
				<h2 class="form-title text-center">Add Product</h2>

				<form onSubmit={handleSubmit(onSubmit)} className="text-center">
					<div className="row w-75 mx-auto">
						<div className="col-md-12">
							<input
								{...register("name")}
								placeholder="Product Name"
								className="p-2 m-2 w-100 rounded border border-success"
							/>
						</div>

						<div className="col-md-12">
							<textarea
								{...register("description")}
								placeholder="Descriptions"
								className="p-2 m-2 w-100 rounded border border-success"
							/>
						</div>

						<div className="col-md-6">
							<input
								{...register("price")}
								placeholder="Price"
								type="number"
								className="p-2 m-2 w-100 rounded border border-success"
							/>
						</div>

						<div className="col-md-6">
							<input
								{...register("img")}
								placeholder="Image URL"
								className="p-2 m-2 w-100 rounded border border-success"
							/>
						</div>
					</div>
					{errors.exampleRequired && alert("Something went wrong!")}

					<input
						type="submit"
						value="Add Product"
						className="btn-grad w-25 my-2 text-center"
					/>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
