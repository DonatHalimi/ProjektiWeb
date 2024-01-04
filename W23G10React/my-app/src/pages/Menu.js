import React, { Fragment } from "react";
import { Link, useLocation } from 'react-router-dom';

function Menu() {
	const location = useLocation();

	// Function to check if a given path matches the current location
	const isActive = (path) => location.pathname === path;

	return (
		<Fragment>
			<div className="top-header-area" id="sticker">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 col-sm-12 text-center">
							<div className="main-menu-wrap">
								{/* <!-- logo --> */}
								<div className="site-logo">
									<img src="assets/img/logo.png" alt="" />
								</div>
								{/* <!-- logo -->

                        <!-- menu start --> */}
								<nav className="main-menu">
									<ul>
										<li className={isActive('/index') ? 'current-list-item' : ''}><Link to="/index">Home</Link></li>
										<li className={isActive('/about') ? 'current-list-item' : ''}><Link to="/about">About</Link></li>
										<li className={isActive('/contact') ? 'current-list-item' : ''}><Link to="/contact">Contact</Link></li>
										<li className={isActive('/shop') ? 'current-list-item' : ''}>
											<Link to="/shop">Shop</Link>
											<ul className="sub-menu">
												<li className={isActive('/checkout') ? 'current-list-item' : ''}><Link to="/checkout">Checkout</Link></li>
												<li className={isActive('/singleproduct') ? 'current-list-item' : ''}><Link to="/singleproduct">Single product</Link></li>
											</ul>
										</li>
										<li className={isActive('/cart') ? 'current-list-item' : ''}>

											<div className="header-icons">
												<Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
												<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
												<Link to="/login"><i class="fas fa-user-alt"></i></Link>
											</div>
											<li className={isActive('/login') ? 'current-list-item' : ''}>
											</li>
										</li>

									</ul>
								</nav>
								<a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
								<div className="mobile-menu"></div>
								{/* <!-- menu end --> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Menu;
