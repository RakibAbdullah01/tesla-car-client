import axios from "axios";
import { default as React, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "./CustomerReview.css";

const CustomerReview = () => {
	const [cusromReview, setCustomReview] = useState([]);

	useEffect(() => {
		axios
			.get("https://enigmatic-sierra-10657.herokuapp.com/reviews")
			.then((res) => {
				setCustomReview(res.data.reverse());
			});
	}, []);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container ">
			<div className="content">
				<Slider className="w-100 mx-auto" {...settings}>
					{cusromReview.map((rev) => (
						<div className="col">
							<div className="testimonial d-flex flex-column align-items-center justify-content-center">
								<div className="name text-white">{rev.customer}</div>

								<ReactStars
									count={5}
									edit={false}
									value={rev.rating}
									size={24}
									activeColor="#ffd700"
								/>
								<p className="text-white mt-3">{rev.review}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default CustomerReview;
