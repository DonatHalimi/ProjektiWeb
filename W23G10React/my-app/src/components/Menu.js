import React, { Fragment, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Menu() {
	const location = useLocation();
	const [searchTerm, setSearchTerm] = useState('');
	const [searchClicked, setSearchClicked] = useState(false);
	const [books, setBooks] = useState([]);
	const [showDropdown, setShowDropdown] = useState(false);
	const navigate = useNavigate();
	const menuRef = useRef(null);

	// Function to check if a given path matches the current location
	const isActive = (path) => location.pathname === path;

	// Funksioni per me i filtru librat duke u bazuar ne titull
	const filteredBooks = books.filter((book) =>
		book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Bejme fetch librat me useEffect duke perdorur API kur komponenti behet mount
	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch('https://localhost:7132/api/Book/Get');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				setBooks(data);
			} catch (error) {
				console.error('Error fetching books:', error);
			}
		};

		fetchBooks();
	}, []);

	// Funksioni per me navigate ne faqen e detajeve kur klikohet nje liber i filtruar
	const handleBookClick = (bookId) => {
		navigate(`/book/${bookId}`);
		setShowDropdown(false);
	};

	// Funksioni per me u ba update librat e filtruar perderisa user-i eshte duke shkruar
	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
		setSearchClicked(false);
		
		setShowDropdown(true);
	};

	// Funksioni i cili shfaq listen e librave te filtruar kur klikohet ikona e search
	const handleSearchIconClick = () => {
		setSearchClicked(true);
		setShowDropdown(true);
	};

	// Krijojme nje useEffect per me mbyll dropwodn kur klikojme jashte menu-se ose kur klikojme Esc ne tastiere
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};

		// Funksioni per me handle eventin kur klikojme butonin "Esc" me largu dropdown te librave te filtruar
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setShowDropdown(false);
			}
		};

		// Shtojme event listeners kur ka click ose kur ka keydown per butonin "Esc"
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeyDown);

		// Cleanup: Largojme event listeners kur komponenti behet unmount
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<Fragment>
			<div className="top-header-area" id="sticker">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-sm-12 text-center">
							<div className="main-menu-wrap" ref={menuRef}>

								<div className="site-logo">
									<Link to={"/index"}>
										<img src="/assets/img/MainLogo.png" alt="" />
									</Link>
								</div>

								<nav className="main-menu">
									<ul>
										<li className={isActive('/index') ? 'current-list-item' : ''}><Link to="/index">Home</Link></li>
										<li className={isActive('/about') ? 'current-list-item' : ''}><Link to="/about">About</Link></li>
										<li className={isActive('/contact') ? 'current-list-item' : ''}><Link to="/contact">Contact</Link></li>
										<li className={isActive('/favourite') ? 'current-list-item' : ''}><Link to="/favourite">Favourites</Link></li>
										<li className={isActive('/cart') ? 'current-list-item' : ''}>
											<div className="header-icons">
												<li className={isActive('/cart') ? 'current-list-item' : ''}>
													<Link to="/cart">
														<div className="header-icons">
															<i className="fas fa-shopping-cart"></i>
														</div>
													</Link>
												</li>
												<input
													type="text"
													placeholder="Search books..."
													value={searchTerm}
													onChange={handleInputChange}
													onClick={() => setSearchClicked(false)}
													onKeyDown={(e) => {
														if (e.key === 'Enter') {
															setSearchClicked(true);
															setShowDropdown(true);
														}
													}}
													style={{ borderRadius: "10px", border: "white", height: "40px", width: "200px", padding: "10px" }}
												/>
												<i className="fas fa-search" style={{ position: "relative", right: "22px", color: "#091B27", cursor: 'pointer' }} onClick={handleSearchIconClick}></i>
												<li className={isActive('/login') ? 'current-list-item' : ''}>
													<Link to="/login">
														<div className="header-icons">
															<button type="submit" className="form-control btn btn-primary rounded submit px-3 mb-2">Sign out</button>
														</div>
													</Link>
												</li>
											</div>
											<li className={isActive('/login') ? 'current-list-item' : ''}></li>
										</li>
									</ul>
								</nav>

								{/* Shfaq detajet e librave te filtruar ose shfaq mesazhin "No books found with the name: {searchTerm}" */}
								{showDropdown && (
									<div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: "auto", height: "auto", marginTop: "10px", marginRight: "10px", marginLeft: "600px", border: "1px solid #ccc" }}>
										{filteredBooks.length > 0 ? (
											filteredBooks.map((book) => (
												<div key={book.id} onClick={() => handleBookClick(book.id)} style={{ cursor: 'pointer', position: "relative", right: "370px", width: "1000px", }}>
													<img
														src={`https://localhost:7207/Images/${book.coverImage}`}
														style={{ maxWidth: '100px', maxHeight: '300px', position: "relative", right: "80px" }}
													/>
													<h3 style={{ margin: '0', color: '#333', position: "relative", left: "150px", bottom: "150px" }}>{book.title}</h3>
													<p style={{ margin: '0', color: '#777', position: "relative", left: "150px", bottom: "150px" }}>{book.author}</p>
												</div>
											))
										) : (
											<p>No book found with the name: {searchTerm}</p>
										)}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Menu;
