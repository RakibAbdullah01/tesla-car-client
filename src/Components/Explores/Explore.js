import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Explore.css";

const Explore = () => {
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
		<div>
			<div className="head-banner">
				<Header />
			</div>
			<div>
				<div className="container">
					<div className="content text-center">
						<h2 className="my-3" style={{ fontSize: "30px" }}>
							{" "}
							<b>
								{" "}
								<span style={{ color: "orangered" }}>Latest</span> Products
							</b>{" "}
						</h2>
						{/* ------------- */}

						<Row xs={1} sm={1} md={3} className="g-4 p-4">
							{products.map((product) => (
								<Col className="me-2">
									<Card className="h-100">
										<Card.Img variant="top" height="200" src={product.img} />
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
													className="fas fa-cart-plus pe-2"
												></i>{" "}
												Buy Now
											</Link>
										</Card.Footer>
									</Card>
								</Col>
							))}
						</Row>

						{/* <Row xs={1} sm={1} md={3} className="g-4 p-4">
							{products.map((product) => (
								<Col className="me-2">
									<Card className="h-100">
										<Card.Img variant="top" height="200" src={product.img} />
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
												<i className="fas fa-cart-plus pe-2"></i> Buy Now
											</Link>
										</Card.Footer>
									</Card>
								</Col>
							))}
						</Row> */}
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
};

export default Explore;
