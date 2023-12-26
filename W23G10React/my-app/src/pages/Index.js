import React, { Fragment } from "react";
import Menu from "./Menu";

function Index(){
return(
    <Fragment>

        <Menu/>
	<div className="search-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<span className="close-btn"><i className="fas fa-window-close"></i></span>
					<div className="search-bar">
						<div className="search-bar-tablecell">
							<h3>Search For:</h3>
							<input type="text" placeholder="Keywords"/>
							<button type="submit">Search <i className="fas fa-search"></i></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end search arewa -->

<!-- hero area --> */}
	<div className="hero-area hero-bg">
        <Menu/>
		<div className="container">
			<div className="row">
				<div className="col-lg-9 offset-lg-2 text-center">
					<div className="hero-text">
						<div className="hero-text-tablecell">
							<p className="subtitle">Fresh & Organic</p>
							<h1>Delicious Seasonal Fruits</h1>
							<div className="hero-btns">
								<a href="shop.html" className="boxed-btn">Fruit Collection</a>
								<a href="contact.html" className="bordered-btn">Contact Us</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end hero area -->

	<!-- features list section --> */}
	<div className="list-section pt-80 pb-80">
		<div className="container">

			<div className="row">
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
							<i className="fas fa-shipping-fast"></i>
						</div>
						<div className="content">
							<h3>Free Shipping</h3>
							<p>When order over $75</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
							<i className="fas fa-phone-volume"></i>
						</div>
						<div className="content">
							<h3>24/7 Support</h3>
							<p>Get support all day</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="list-box d-flex justify-content-start align-items-center">
						<div className="list-icon">
							<i className="fas fa-sync"></i>
						</div>
						<div className="content">
							<h3>Refund</h3>
							<p>Get refund within 3 days!</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	{/* <!-- end features list section -->

	<!-- product section --> */}
	<div className="product-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt=""/></a>
						</div>
						<h3>Strawberry</h3>
						<p className="product-price"><span>Per Kg</span> 85$ </p>
						<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt=""/></a>
						</div>
						<h3>Berry</h3>
						<p className="product-price"><span>Per Kg</span> 70$ </p>
						<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
					<div className="single-product-item">
						<div className="product-image">
							<a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt=""/></a>
						</div>
						<h3>Lemon</h3>
						<p className="product-price"><span>Per Kg</span> 35$ </p>
						<a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end product section -->

	<!-- cart banner section --> */}
	<section className="cart-banner pt-100 pb-100">
    	<div className="container">
        	<div className="row clearfix">
            	{/* <!--Image Column--> */}
            	<div className="image-column col-lg-6">
                	<div className="image">
                    	<div className="price-box">
                        	<div className="inner-price">
                                <span className="price">
                                    <strong>30%</strong> <br/> off per kg
                                </span>
                            </div>
                        </div>
                    	<img src="assets/img/a.jpg" alt=""/>
                    </div>
                </div>
                {/* <!--Content Column--> */}
                <div className="content-column col-lg-6">
					<h3><span className="orange-text">Deal</span> of the month</h3>
                    <h4>Hikan Strwaberry</h4>
                    <div className="text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</div>
                    {/* <!--Countdown Timer--> */}
                    <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2020/2/01"><div className="counter-column"><div className="inner"><span className="count">00</span>Days</div></div> <div className="counter-column"><div className="inner"><span className="count">00</span>Hours</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Mins</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Secs</div></div></div></div>
                	<a href="cart.html" className="cart-btn mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- end cart banner section -->

	<!-- testimonail-section --> */}
	<div className="testimonail-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-10 offset-lg-1 text-center">
					<div className="testimonial-sliders">
						<div className="single-testimonial-slider">
							<div className="client-avater">
								<img src="assets/img/avaters/avatar1.png" alt=""/>
							</div>
							<div className="client-meta">
								<h3>Saira Hakim <span>Local shop owner</span></h3>
								<p className="testimonial-body">
									" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
								</p>
								<div className="last-icon">
									<i className="fas fa-quote-right"></i>
								</div>
							</div>
						</div>
						<div className="single-testimonial-slider">
							<div className="client-avater">
								<img src="assets/img/avaters/avatar2.png" alt=""/>
							</div>
							<div className="client-meta">
								<h3>David Niph <span>Local shop owner</span></h3>
								<p className="testimonial-body">
									" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
								</p>
								<div className="last-icon">
									<i className="fas fa-quote-right"></i>
								</div>
							</div>
						</div>
						<div className="single-testimonial-slider">
							<div className="client-avater">
								<img src="assets/img/avaters/avatar3.png" alt=""/>
							</div>
							<div className="client-meta">
								<h3>Jacob Sikim <span>Local shop owner</span></h3>
								<p className="testimonial-body">
									" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "
								</p>
								<div className="last-icon">
									<i className="fas fa-quote-right"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end testimonail-section -->
	
	<!-- advertisement section --> */}
	<div className="abt-section mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="abt-bg">
						<a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="abt-text">
						<p className="top-sub">Since Year 1999</p>
						<h2>We are <span className="orange-text">Fruitkha</span></h2>
						<p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
						<a href="about.html" className="boxed-btn mt-4">know more</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end advertisement section -->
	
	<!-- shop banner --> */}
	<section className="shop-banner">
    	<div className="container">
        	<h3>December sale is on! <br/> with big <span className="orange-text">Discount...</span></h3>
            <div className="sale-percent"><span>Sale! <br/> Upto</span>50% <span>off</span></div>
            <a href="shop.html" className="cart-btn btn-lg">Shop Now</a>
        </div>
    </section>
	{/* <!-- end shop banner -->

	<!-- latest news --> */}
	<div className="latest-news pt-150 pb-150">
		<div className="container">

			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> News</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single-latest-news">
						<a href="single-news.html"><div className="latest-news-bg news-bg-1"></div></a>
						<div className="news-text-box">
							<h3><a href="single-news.html">You will vainly look for fruit on it in autumn.</a></h3>
							<p className="blog-meta">
								<span className="author"><i className="fas fa-user"></i> Admin</span>
								<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
							<a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-latest-news">
						<a href="single-news.html"><div className="latest-news-bg news-bg-2"></div></a>
						<div className="news-text-box">
							<h3><a href="single-news.html">A man's worth has its season, like tomato.</a></h3>
							<p className="blog-meta">
								<span className="author"><i className="fas fa-user"></i> Admin</span>
								<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
							<a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
					<div className="single-latest-news">
						<a href="single-news.html"><div className="latest-news-bg news-bg-3"></div></a>
						<div className="news-text-box">
							<h3><a href="single-news.html">Good thoughts bear good fresh juicy fruit.</a></h3>
							<p className="blog-meta">
								<span className="author"><i className="fas fa-user"></i> Admin</span>
								<span className="date"><i className="fas fa-calendar"></i> 27 December, 2019</span>
							</p>
							<p className="excerpt">Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.</p>
							<a href="single-news.html" className="read-more-btn">read more <i className="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 text-center">
					<a href="news.html" className="boxed-btn">More News</a>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end latest news -->

	<!-- logo carousel --> */}
	<div className="logo-carousel-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="logo-carousel-inner">
						<div className="single-logo-item">
							<img src="assets/img/company-logos/1.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/2.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/3.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/4.png" alt=""/>
						</div>
						<div className="single-logo-item">
							<img src="assets/img/company-logos/5.png" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end logo carousel -->

	<!-- footer --> */}
	<div className="footer-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="footer-box about-widget">
						<h2 className="widget-title">About us</h2>
						<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box get-in-touch">
						<h2 className="widget-title">Get in Touch</h2>
						<ul>
							<li>34/8, East Hukupara, Gifirtok, Sadan.</li>
							<li>support@fruitkha.com</li>
							<li>+00 111 222 3333</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box pages">
						<h2 className="widget-title">Pages</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="services.html">Shop</a></li>
							<li><a href="news.html">News</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-box subscribe">
						<h2 className="widget-title">Subscribe</h2>
						<p>Subscribe to our mailing list to get the latest updates.</p>
						<form action="index.html">
							<input type="email" placeholder="Email"/>
							<button type="submit"><i className="fas fa-paper-plane"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- end footer -->
	
	<!-- copyright --> */}
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
export default Index;