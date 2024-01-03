import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function About() {
	return (
		<Fragment>

			<Menu />
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
								<p>Diverse & Knowledgeable</p>
								<h1>About Us</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end breadcrumb section -->

	<!-- featured section --> */}
			<div className="feature-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="featured-text">
								<h2 className="pb-3">Why <span className="orange-text">Fruitkha</span></h2>
								<div className="row">
									<div className="col-lg-6 col-md-6 mb-4 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-shipping-fast"></i>
											</div>
											<div className="content">
												<h3>Home Delivery</h3>
												<p>Enjoy the convenience of doorstep delivery for your chosen books. Our swift shipping ensures your literary treasures reach you in no time.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-money-bill-alt"></i>
											</div>
											<div className="content">
												<h3>Best Price</h3>
												<p>Explore an extensive library at the best prices. We believe in providing affordable access to a world of knowledge and entertainment.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-briefcase"></i>
											</div>
											<div className="content">
												<h3>Custom Box</h3>
												<p>Create a personalized reading experience with our custom box option. Tailor your collection to suit your unique literary preferences.</p>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="list-box d-flex">
											<div className="list-icon">
												<i className="fas fa-sync-alt"></i>
											</div>
											<div className="content">
												<h3>Quick Refund</h3>
												<p>Our commitment to customer satisfaction includes a hassle-free refund process. Experience peace of mind with our quick and efficient refund services.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- end featured section -->

	<!-- shop banner --> */}
			{/* <section className="shop-banner">
				<div className="container">
					<h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
					<div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
					<a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
				</div>
			</section> */}
			{/* <!-- end shop banner -->

	<!-- team section --> */}
			<div className="mt-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="section-title">
								<h3>Meet <span className="orange-text">Our Team</span></h3>
								<p>Get to know the passionate individuals behind our library, dedicated to bringing you a delightful reading experience.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="single-team-item">
								<div className="team-bg team-bg-1"></div>
								<h4>John Smith <span>Book Curator</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="single-team-item">
								<div className="team-bg team-bg-2"></div>
								<h4>Amy Johnson <span>Library Specialist</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
							<div className="single-team-item">
								<div className="team-bg team-bg-3"></div>
								<h4>Emma Davis <span>Content Curator</span></h4>
								<ul className="social-link-team">
									<li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
									<li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- end team section -->

	<!-- testimonail-section --> */}
			<Testimonials />
			{/* <!-- end testimonail-section -->

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
export default About;