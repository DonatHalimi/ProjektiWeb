import { React, useState, useEffect, Fragment } from "react";
import Book from "../components/Book";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import GenreList from "../components/GenreList";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Index() {
	const [books, setBooks] = useState([]);

	// State dhe variablat per pagination
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 12;
	const pageCount = Math.ceil(books.length / itemsPerPage);

	// Bejme fetch librat me useEffect duke perdorur API kur komponenti behet mount
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
				console.error("Error fetching books:", error);
			}
		};

		fetchBooks();
	}, []);

	// Kalkulimi i offset-it dhe ndarja e librave per pagination
	const offset = currentPage * itemsPerPage;
	const currentBooks = books.slice(offset, offset + itemsPerPage);

	// Ben handle page click per pagination
	const handlePageClick = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// JSX per render te faqes
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

			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center mt-20">
					<div className="section-title">
						<h3><span className="orange-text">Our</span> Books</h3>
						<p>Take a moment to explore the pages that promise excitement, knowledge, and pure enjoyment.</p>
					</div>
				</div>
			</div>

			<GenreList />

			<div className="product-container" style={{ marginLeft: "-50px" }}>
				{currentBooks.length > 0 ? (
					<div className="row product-lists" style={{ marginLeft: '180px' }}>
						{currentBooks.map((book) => (
							<Book key={book.id} book={book} />
						))}
					</div>
				) : (
					<div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f8f8', border: '1px solid #ddd', borderRadius: '5px', marginTop: '20px' }}>
						<p>It seems our shelves are empty at the moment.</p>
						<p>Check back later for exciting new additions!</p>
					</div>
				)}
			</div>

			{/* Pagination */}
			{currentBooks.length > 0 && (
				<div className="pagination-container" style={{ marginTop: "30px", textAlign: "center" }}>
					<ReactPaginate
						previousLabel={"Previous"}
						nextLabel={"Next"}
						breakLabel={"..."}
						pageCount={pageCount}
						marginPagesDisplayed={5}
						pageRangeDisplayed={5}
						onPageChange={handlePageClick}
						containerClassName={"pagination"}
						activeClassName={"active"}
						initialPage={currentPage}
						pageClassName={"page-item"}
						pageLinkClassName={"page-link"}
						previousClassName={"page-item"}
						nextClassName={"page-item"}
						previousLinkClassName={"page-link"}
						nextLinkClassName={"page-link"}
					/>
				</div>
			)}

			<Testimonials />

			<div className="abt-section mb-150">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="abt-bg">
								<a href="https://www.youtube.com/watch?v=lwdNcMkOiTM" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="abt-text">
								<p className="top-sub">Since 2023</p>
								<h2>We are <span className="orange-text">cozyread</span></h2>
								<p>Embark on a literary journey with us! At our online library, we are dedicated to bringing the magic of books to your fingertips. Explore our carefully curated selection, where every page invites you into a world of imagination and knowledge. Join us in celebrating the joy of reading!</p>
								<Link to="/about">
									<a className="boxed-btn mt-4" style={{ color: "white", transition: "all 0.6s" }}>Learn more</a>
								</Link>
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