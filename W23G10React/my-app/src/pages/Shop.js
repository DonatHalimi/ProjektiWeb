import React, { Fragment,useState, useEffect  } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Book from "./Book";

function Shop() {
	const [books, setBooks] = useState([]);

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

	

	return (
		<Fragment>
			<Menu />
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
			<div class="breadcrumb-section hero-bg">
				<div class="container">
					<div class="row">
						<div class="col-lg-8 offset-lg-2 text-center">
							<div class="breadcrumb-text">
								<p>Fresh and Organic</p>
								<h1>Shop</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- end breadcrumb section -->

	<!-- products --> */}
			<div class="product-section mt-150 mb-150">
				<div class="container">

					<div class="row">
						<div class="col-md-12">
							<div class="product-filters">
								<ul>
									<li class="active" data-filter="*">All</li>
									<li data-filter=".strawberry">Strawberry</li>
									<li data-filter=".berry">Berry</li>
									<li data-filter=".lemon">Lemon</li>
								</ul>
							</div>
						</div>
					</div>

					
					{/*<div class="row product-lists">
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
*/}
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
				</div>
			</div>

			<div>
  {books.length > 0 ? (
    <div className="main-content">
      {/* Render a Book component for each item in the books array */}
      {books.map((book) => (
        <div key={book.id} className="products-container">
          <Book book={book} />
        </div>
      ))}
    </div>
  ) : (
    <p>Sorry, there are no available products at the moment.</p>
  )}
</div>

						
			{/* <!-- end products -->

	<!-- logo carousel --> */}
			{/* <div class="logo-carousel-section">
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
			</div> */}

			<Footer />

			{/* </div>
	<!-- end copyright -->
	
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
export default Shop;