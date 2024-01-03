import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Contact() {

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
								<p>Get 24/7 Support</p>
								<h1>Contact us</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end breadcrumb section -->

{/* <!-- contact form --> */}
			<div className="contact-from-section mt-150 mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mb-5 mb-lg-0">
							<div className="form-title">
								<h2>Do you have any questions?</h2>
								<p>If you have any inquiries or need assistance, feel free to reach out to us. We are here to help and provide you with the information you need. Your satisfaction is our priority, and we look forward to addressing any questions or concerns you may have.</p>
							</div>
							<div id="form_status"></div>
							<div className="contact-form">
								<form type="POST" id="fruitkha-contact" onSubmit="return valid_datas( this );">
									<p>
										<input type="text" placeholder="Name" name="name" id="name" />
										<input type="email" placeholder="Email" name="email" id="email" />
									</p>
									<p>
										<input type="tel" placeholder="Phone" name="phone" id="phone" />
										<input type="text" placeholder="Subject" name="subject" id="subject" />
									</p>
									<p><textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea></p>
									<input type="hidden" name="token" value="FsWga4&@f6aw" />
									<p><input type="submit" value="Submit" /></p>
								</form>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="contact-form-wrap">
								<div className="contact-form-box">
									<h4><i className="fas fa-map"></i> Shop Address</h4>
									<p>34/8 Prishtinë <br /> Kosovë</p>
								</div>
								<div className="contact-form-box">
									<h4><i className="far fa-clock"></i> Shop Hours</h4>
									<p>MON - FRIDAY: 8 AM to 9 PM <br /> SAT - SUN: 10 AM to 8 PM </p>
								</div>
								<div className="contact-form-box">
									<h4><i className="fas fa-address-book"></i> Contact</h4>
									<p>Phone: +383 44 555 444 <br /> Email: support@name.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end contact form --> */}


			{/* <div className="find-location blue-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
				</div>
			</div>
		</div>
	</div> */}
			{/* <!-- end find our location -->

	<!-- google map section --> */}
			{/* <div className="embed-responsive embed-responsive-21by9">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26432.42324808999!2d-118.34398767954286!3d34.09378509738966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf07045279bf%3A0xf67a9a6797bdfae4!2sHollywood%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1576846473265!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" className="embed-responsive-item"></iframe>
	</div> */}

			<Footer />
			{/* <!-- end google map section -->



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
	<!-- form validation js -->
	<script src="assets/js/form-validate.js"></script>
	<!-- main js -->
	<script src="assets/js/main.js"></script> */}
		</Fragment>
	)
}
export default Contact;