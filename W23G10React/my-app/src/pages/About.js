import { React, useEffect, Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

function About() {
	// useEffect per me scroll toTop sa here qe hapet faqja
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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

			{/* Breadcrumb Section */}
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

			{/* Features Section */}
			<div className="feature-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="featured-text">
								<h2 className="pb-3">Why <span className="orange-text">Cozyreads</span></h2>
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

			{/* Team Section */}
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

			{/* Testimonail Section */}
			<Testimonials />

			<Footer />

		</Fragment>
	)
}
export default About;