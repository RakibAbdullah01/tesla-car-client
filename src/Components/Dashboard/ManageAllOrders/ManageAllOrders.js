import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
	const [orders, setOrders] = useState([]);
	const [load, setLoad] = useState(false);

	// Load All order
	useEffect(() => {
		axios
			.get("https://enigmatic-sierra-10657.herokuapp.com/orders")
			.then((res) => {
				setOrders(res.data);
			});
	}, [load]);

	// Delete order
	const handleDelete = (id) => {
		const proceed = window.confirm("Are you Sure ? You want to Delete ?");
		if (proceed) {
			axios
				.delete(`https://enigmatic-sierra-10657.herokuapp.com/orders/${id}`)
				.then((res) => {
					if (res.data.acknowledged) {
						alert("Deleted order successfully!");
					}
					const remain = orders.filter((book) => book._id !== id);
					setOrders(remain);
				});
		}
	};

	// Update Status
	const handleAprove = (id) => {
		axios
			.put(`https://enigmatic-sierra-10657.herokuapp.com/orders/${id}`, {})
			.then((res) => {
				if (res.data.acknowledged) {
					alert("Order approved!");
					setLoad(true);
				}
			});
	};

	return (
		<div>
			<h1>Manage orders</h1>
			<Table striped bordered hover variant="dark" className="text-center my-4">
				<thead>
					<tr>
						<th>#</th>
						<th>Customer Name</th>
						<th>Order Item</th>
						<th>Email</th>
						<th>Order Status</th>
						<th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{order.name}</td>
							<td>{order.product}</td>
							<td>{order.email}</td>
							<td>{order.status}</td>
							<td>
								<i
									class="fas fa-check px-2"
									style={{ cursor: "pointer", color: "yellowGreen" }}
									onClick={() => handleAprove(order._id)}
								></i>

								<i
									class="fas fa-trash-alt text-danger px-2"
									style={{ cursor: "pointer" }}
									onClick={() => handleDelete(order._id)}
								></i>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ManageAllOrders;
