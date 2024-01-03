import React, { Fragment } from "react";
import Menu from "./Menu";

function Checkout() {
	return (
		<Fragment>
			<Menu />
			{/* <!-- search area --> */}
			<div class="search-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<span class="close-btn"><i class="fas fa-window-close"></i></span>
							<div class="search-bar">
								<div class="search-bar-tablecell">
									<h3>Search For:</h3>
									<input type="text" placeholder="Keywords" />
									<button type="submit">Search <i class="fas fa-search"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end search arewa -->
	
	<!-- breadcrumb-section --> */}
			<div class="breadcrumb-section breadcrumb-bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 text-center">
							<div class="breadcrumb-text">
								<p>Fresh and Organic</p>
								<h1>Check Out Product</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end breadcrumb section -->

	<!-- check out section --> */}
			<div class="checkout-section mt-150 mb-150">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="checkout-accordion-wrap">
								<div class="accordion" id="accordionExample">
									<div class="card single-accordion">
										<div class="card-header" id="headingOne">
											<h5 class="mb-0">
												<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
													Billing Address
												</button>
											</h5>
										</div>

										<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
											<div class="card-body">
												<div class="billing-address-form">
													<form action="index.html">
														<p><input type="text" placeholder="Name" /></p>
														<p><input type="email" placeholder="Email" /></p>
														<p><input type="text" placeholder="Address" /></p>
														<p><input type="tel" placeholder="Phone" /></p>
														<p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Say Something"></textarea></p>
													</form>
												</div>
											</div>
										</div>
									</div>
									<div class="card single-accordion">
										<div class="card-header" id="headingTwo">
											<h5 class="mb-0">
												<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
													Shipping Address
												</button>
											</h5>
										</div>
										<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
											<div class="card-body">
												<div class="shipping-address-form">
													<p>Your shipping address form is here.</p>
												</div>
											</div>
										</div>
									</div>
									<div class="card single-accordion">
										<div class="card-header" id="headingThree">
											<h5 class="mb-0">
												<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
													Card Details
												</button>
											</h5>
										</div>
										<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
											<div class="card-body">
												<div class="card-details">
													<p>Your card details goes here.</p>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

						<div class="col-lg-4">
							<div class="order-details-wrap">
								<table class="order-details">
									<thead>
										<tr>
											<th>Your order Details</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody class="order-details-body">
										<tr>
											<td>Product</td>
											<td>Total</td>
										</tr>
										<tr>
											<td>Strawberry</td>
											<td>$85.00</td>
										</tr>
										<tr>
											<td>Berry</td>
											<td>$70.00</td>
										</tr>
										<tr>
											<td>Lemon</td>
											<td>$35.00</td>
										</tr>
									</tbody>
									<tbody class="checkout-details">
										<tr>
											<td>Subtotal</td>
											<td>$190</td>
										</tr>
										<tr>
											<td>Shipping</td>
											<td>$50</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>$240</td>
										</tr>
									</tbody>
								</table>
								<a href="#" class="boxed-btn">Place Order</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end check out section -->

	<!-- logo carousel --> */}
			<div class="logo-carousel-section">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="logo-carousel-inner">
								<div class="single-logo-item">
									<img src="assets/img/company-logos/1.png" alt="" />
								</div>
								<div class="single-logo-item">
									<img src="assets/img/company-logos/2.png" alt="" />
								</div>
								<div class="single-logo-item">
									<img src="assets/img/company-logos/3.png" alt="" />
								</div>
								<div class="single-logo-item">
									<img src="assets/img/company-logos/4.png" alt="" />
								</div>
								<div class="single-logo-item">
									<img src="assets/img/company-logos/5.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end logo carousel -->

	<!-- footer --> */}
			<div class="footer-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-6">
							<div class="footer-box about-widget">
								<h2 class="widget-title">About us</h2>
								<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="footer-box get-in-touch">
								<h2 class="widget-title">Get in Touch</h2>
								<ul>
									<li>34/8, East Hukupara, Gifirtok, Sadan.</li>
									<li>support@fruitkha.com</li>
									<li>+00 111 222 3333</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="footer-box pages">
								<h2 class="widget-title">Pages</h2>
								<ul>
									<li><a href="index.html">Home</a></li>
									<li><a href="about.html">About</a></li>
									<li><a href="services.html">Shop</a></li>
									<li><a href="news.html">News</a></li>
									<li><a href="contact.html">Contact</a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="footer-box subscribe">
								<h2 class="widget-title">Subscribe</h2>
								<p>Subscribe to our mailing list to get the latest updates.</p>
								<form action="index.html">
									<input type="email" placeholder="Email" />
									<button type="submit"><i class="fas fa-paper-plane"></i></button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end footer -->
	
	<!-- copyright --> */}
			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-12">
							<p>Copyrights &copy; 2019 - <a href="https://imransdesign.com/">Imran Hossain</a>,  All Rights Reserved.</p>
						</div>
						<div class="col-lg-6 text-right col-md-12">
							<div class="social-icons">
								<ul>
									<li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
									<li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
									<li><a href="#" target="_blank"><i class="fab fa-dribbble"></i></a></li>
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
export default Checkout;