import React, { Fragment } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Cart() {
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
											<th className="product-remove"></th>
											<th className="product-image">Product Image</th>
											<th className="product-name">Name</th>
											<th className="product-price">Price</th>
											<th className="product-quantity">Quantity</th>
											<th className="product-total">Total</th>
										</tr>
									</thead>
									<tbody>
										<tr className="table-body-row">
											<td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
											<td className="product-image"><img src="assets/img/products/product-img-1.jpg" alt="" /></td>
											<td className="product-name">Strawberry</td>
											<td className="product-price">$85</td>
											<td className="product-quantity"><input type="number" placeholder="0" /></td>
											<td className="product-total">1</td>
										</tr>
										<tr className="table-body-row">
											<td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
											<td className="product-image"><img src="assets/img/products/product-img-2.jpg" alt="" /></td>
											<td className="product-name">Berry</td>
											<td className="product-price">$70</td>
											<td className="product-quantity"><input type="number" placeholder="0" /></td>
											<td className="product-total">1</td>
										</tr>
										<tr className="table-body-row">
											<td className="product-remove"><a href="#"><i className="far fa-window-close"></i></a></td>
											<td className="product-image"><img src="assets/img/products/product-img-3.jpg" alt="" /></td>
											<td className="product-name">Lemon</td>
											<td className="product-price">$35</td>
											<td className="product-quantity"><input type="number" placeholder="0" /></td>
											<td className="product-total">1</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="total-section">
								<table className="total-table">
									<thead className="total-table-head">
										<tr className="table-total-row">
											<th>Total</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr className="total-data">
											<td><strong>Subtotal: </strong></td>
											<td>$500</td>
										</tr>
										<tr className="total-data">
											<td><strong>Shipping: </strong></td>
											<td>$45</td>
										</tr>
										<tr className="total-data">
											<td><strong>Total: </strong></td>
											<td>$545</td>
										</tr>
									</tbody>
								</table>
								<div className="cart-buttons">
									<a href="cart.html" className="boxed-btn">Update Cart</a>
									<Link to={"/checkout"}>
										<a className="boxed-btn black">Check Out</a>
									</Link>
								</div>
							</div>

							<div className="coupon-section">
								<h3>Apply Coupon</h3>
								<div className="coupon-form-wrap">
									<form action="index.html">
										<p><input type="text" placeholder="Coupon" /></p>
										<p><input type="submit" value="Apply" /></p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end cart -->

	<!-- logo carousel --> */}
			{/* <div className="logo-carousel-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="logo-carousel-inner">
								<div className="single-logo-item">
									<img src="assets/img/company-logos/1.png" alt="" />
								</div>
								<div className="single-logo-item">
									<img src="assets/img/company-logos/2.png" alt="" />
								</div>
								<div className="single-logo-item">
									<img src="assets/img/company-logos/3.png" alt="" />
								</div>
								<div className="single-logo-item">
									<img src="assets/img/company-logos/4.png" alt="" />
								</div>
								<div className="single-logo-item">
									<img src="assets/img/company-logos/5.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}

			<Footer />

			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
						</div>
						<div className="col-lg-6 text-right col-md-12">
							<div className="social-icons">
								<ul>
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-dribbble"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
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
		</Fragment>
	)
}
export default Cart;