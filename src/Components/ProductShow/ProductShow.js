import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductShow = () => {
	const [products, setProducts] = useState([]);

	// Get All Data
	useEffect(() => {
		axios
			.get("https://enigmatic-sierra-10657.herokuapp.com/products")
			.then((res) => {
				setProducts(res.data);
			});
	}, []);

	return (
		<div class="container">
			<div class="content text-center">
				{/* ------------- */}

				<Row xs={1} sm={1} md={3} className="g-4 p-4">
					{products.slice(0, 6).map((product) => (
						<Col className="me-2">
							<Card className="h-100">
								<Card.Img variant="top" src={product.img} />
								<Card.Body>
									<Card.Title>{product.name}</Card.Title>
									<Card.Text>
										{product.description.split("").slice(0, 100)}
									</Card.Text>
								</Card.Body>
								<Card.Footer className="">
									<Link
										to={`/purchase/${product._id}`}
										className="btn-grad mx-auto"
									>
										<i
											style={{ color: "orangered" }}
											class="fas fa-cart-plus pe-2"
										></i>{" "}
										Buy Now
									</Link>
								</Card.Footer>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default ProductShow;
