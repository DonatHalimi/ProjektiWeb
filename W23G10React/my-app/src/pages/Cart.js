import React, { useContext, Fragment, useEffect } from 'react';
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { ShopContext } from '../context/shop-context';
import CartItem from './cart-items';

function Cart() {
	// Merr kontekstin e dyqanit nga komponenti ShopContext
	const cart = useContext(ShopContext);

	console.log("Cart items:", cart.items);
	// Krijojme funksionin per me llogarit numrin total te produkteve ne shporte
	const booksCount = cart.items.reduce((sum, book) => sum + book.quantity, 0);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Fragment>
			<Menu />
			{/* <!-- search area --> */}
			<div className="search-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<span className="close-btn"><i className="fas fa-window-close"></i></span>
							<div className="search-bar">
								<div className="search-bar-tablecell">
									<h3>Search For:</h3>
									<input type="text" placeholder="Keywords" />
									<button type="submit">Search <i className="fas fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end search arewa -->
	
	<!-- breadcrumb-section --> */}
			<div className="breadcrumb-section hero-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="breadcrumb-text">
								<p>Fresh and Organic</p>
								<h1>Cart</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end breadcrumb section -->

	<!-- cart --> */}
			<div className="cart-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="cart-table-wrap">
								<table className="cart-table">
									<thead className="cart-table-head">
										<tr className="table-head-row">
											{/* <th className="product-remove"></th> */}
											<th className="product-image">Product Image</th>
											<th className="product-name">Name</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-total">Operations</th>
											<th className="product-total">Total</th>
										</tr>
									</thead>
									<tbody>
										{booksCount > 0 ? (
											cart.items.map((currentBook) => (
												<CartItem key={currentBook.id} id={currentBook.id} quantity={currentBook.quantity}></CartItem>
											))
										) : (
											<tr className="table-body-row">
												<td colSpan="6" className='noItemsInCart'>
													<p>Ju nuk keni ndonjë produkt në shportë.</p>
													<Link to="/index">Kthehu në faqen kryesore</Link>
												</td>
											</tr>
										)}
									</tbody>

								</table>
							</div>
						</div>

						{/* Duhet me ba qe me mujt me qit total cost ne tabel prej file-it cart-items.js */}
						<div className="col-lg-2" >
							<div className="total-section">
								<table className="total-table" >
									<thead className="total-table-head">
										<tr className="table-total-row">
											<th>Total</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr className="total-data">
											<td><strong>Subtotal: </strong></td>
										</tr>
										<tr className="total-data">
											<td><strong>Shipping: </strong></td>
											<td>$0</td>
										</tr>
										<tr className="total-data">
											<td><strong>Total: </strong></td>
										</tr>
									</tbody>
								</table>
								<div className="cart-buttons">
									<a className="boxed-btn" style={{ position: "relative", left: "20px", height: "auto", color: "white", width: "165px", transition: "all 0.6s" }}>Purchase items</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />

			{/* <!-- end copyright -->
	
	<!-- jquery -->
	<script src="assets/js/jquery-1.11.3.min.js"></script>
	<!-- bootstrap -->
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<!-- count down -->
	<script src="assets/js/jquery.countdown.js"></script>
	<!-- isotope -->
	<script src="assets/js/jquery.isotope-3.0.6.min.js"></script>
	<!-- waypoints -->
	<script src="assets/js/waypoints.js"></script>
	<!-- owl carousel -->
	<script src="assets/js/owl.carousel.min.js"></script>
	<!-- magnific popup -->
	<script src="assets/js/jquery.magnific-popup.min.js"></script>
	<!-- mean menu -->
	<script src="assets/js/jquery.meanmenu.min.js"></script>
	<!-- sticker js -->
	<script src="assets/js/sticker.js"></script>
	<!-- main js -->
	<script src="assets/js/main.js"></script> */}
		</Fragment >
	)
}
export default Cart;