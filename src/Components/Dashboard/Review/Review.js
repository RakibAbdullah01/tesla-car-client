import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
	const [reviewData, setReviewData] = useState({});
	const { user } = useAuth();

	const ratingChanged = (e) => {
		const value = e.target.value;
		const newData = { ...reviewData };
		newData.rating = value;
		setReviewData(newData);
	};

	const handleOnChange = (e) => {
		const value = e.target.value;
		const newData = { ...reviewData };
		newData.review = value;
		setReviewData(newData);
	};
	const handleReviewSubmit = (e) => {
		e.preventDefault();
		reviewData.customer = user.displayName;
		axios
			.post("https://enigmatic-sierra-10657.herokuapp.com/reviews", reviewData)
			.then((res) => {
				if (res.data.acknowledged) {
					alert("Review Added Successfully!");
				}
			});
	};
	return (
		<div className="container">
			<div className="content ">
				<h2 className="form-title text-center">
					<b>
						Customer <span style={{ color: "orangered" }}>Review</span>{" "}
					</b>
				</h2>
				<form className="w-50 mx-auto" onSubmit={handleReviewSubmit}>
					<div className="d-flex justify-content-center">
						<div className="col-md-4">
							<select
								onChange={ratingChanged}
								id="inputState"
								className="form-select my-2 "
							>
								<option selected>5</option>
								<option>4</option>
								<option>3</option>
								<option>2</option>
								<option>1</option>
								<option>0</option>
							</select>
						</div>
					</div>

					<textarea
						maxLength="150"
						className="form-control mt-3"
						onChange={handleOnChange}
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="Please give your valuable comment for us"
					></textarea>

					<input
						type="submit"
						name="signin"
						id="signin"
						className="btn btn-warning mt-3"
						value="Submit Review"
					/>
				</form>
			</div>
		</div>
	);
};

export default Review;
