import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Menu from "./Menu";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Book from "./Book";

function Index() {

	const [books, setBooks] = useState([]);
	const navigate = useNavigate();


	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch("https://localhost:7132/api/Book/Get");
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setBooks(data);
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchBooks();
	}, []);

	const showToast = (message) => {
		toast.success(message, {
			position: 'top-right',
			style: {
				cursor: 'pointer',
				transition: 'opacity 2s ease-in',
			},
			onClick: () => {
				navigate("/cart");
			},
		});
	};

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

			<div className="breadcrumb-section hero-bg">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="breadcrumb-text">
								<p className="subtitle">Your Gateway to Wisdom</p>
								<h1>Explore a World of Books</h1>
							</div>
						</div>
					</div>
				</div>
			</div>


			{/* Pjesa e produkteve me bootstrap */}



			<div className="product-section mt-150 mb-150">
				<div className="container">

					<p> PRODUKTET BOOTSTRAP STYLE: </p>
					{/* Pjesa e produkteve me bootstrap */}
					<div class="row product-lists">
						<div class="col-lg-4 col-md-6 text-center strawberry">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-1.jpg" alt="" /></a>
								</div>
								<h3>Strawberry</h3>
								<p class="product-price"><span>Per Kg</span> 85$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center berry">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-2.jpg" alt="" /></a>
								</div>
								<h3>Berry</h3>
								<p class="product-price"><span>Per Kg</span> 70$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center lemon">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-3.jpg" alt="" /></a>
								</div>
								<h3>Lemon</h3>
								<p class="product-price"><span>Per Kg</span> 35$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-4.jpg" alt="" /></a>
								</div>
								<h3>Avocado</h3>
								<p class="product-price"><span>Per Kg</span> 50$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-5.jpg" alt="" /></a>
								</div>
								<h3>Green Apple</h3>
								<p class="product-price"><span>Per Kg</span> 45$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center strawberry">
							<div class="single-product-item">
								<div class="product-image">
									<a href="single-product.html"><img src="assets/img/products/product-img-6.jpg" alt="" /></a>
								</div>
								<h3>Strawberry</h3>
								<p class="product-price"><span>Per Kg</span> 80$ </p>
								<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
							</div>
						</div>
					</div>


					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="pagination-wrap">
								<ul>
									<li><a href="#">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a class="active" href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">Next</a></li>
								</ul>
							</div>
						</div>
					</div>


					<div className="row">
						<div className="col-lg-8 offset-lg-2 text-center">
							<div className="section-title">
								<h3><span className="orange-text">Our</span> Books</h3>
								<p>Take a moment to explore the pages that promise excitement, knowledge, and pure enjoyment.</p>
							</div>
						</div>
					</div>
					{books.length > 0 ? (
						<div>
							{books.map((book) => (
								<div key={book.id}>
									<Book book={book} showToast={showToast} />
								</div>
							))}
						</div>
					) : (
						<div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8', border: '1px solid #ddd', borderRadius: '5px', marginTop: '20px', width: "50%", position: "relative", left: "500px", bottom: "20px" }}>
							<p>It seems our shelves are empty at the moment.</p>
							<p>Check back later for exciting new additions!</p>
							{/* You can add additional inline styles for a fancier look */}
						</div>
					)}
				</div>

				<Testimonials />

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
									<p className="top-sub">Since 2023</p>
									<h2>We are <span className="orange-text">Fruitkha</span></h2>
									<p>Embark on a literary journey with us! At our online library, we are dedicated to bringing the magic of books to your fingertips. Explore our carefully curated selection, where every page invites you into a world of imagination and knowledge. Join us in celebrating the joy of reading!</p>
									<Link to="/about">
										<a className="boxed-btn mt-4">Learn more</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />

		</Fragment>
	);
};
export default Index;