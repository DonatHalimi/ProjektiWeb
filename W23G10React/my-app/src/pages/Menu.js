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
									<Link to={"/index"}>
										<img src="/assets/img/MainLogo.png" alt="" />
									</Link>
								</div>
								{/* <!-- logo -->

                        <!-- menu start --> */}
								<nav className="main-menu">
									<ul>
										<li className={isActive('/index') ? 'current-list-item' : ''}><Link to="/index">Home</Link></li>
										<li className={isActive('/about') ? 'current-list-item' : ''}><Link to="/about">About</Link></li>
										<li className={isActive('/contact') ? 'current-list-item' : ''}><Link to="/contact">Contact</Link></li>
										<li className={isActive('/favourite') ? 'current-list-item' : ''}>
											<Link to="/favourite">Favourite</Link>
										</li>
										<li className={isActive('/cart') ? 'current-list-item' : ''}>

											<div className="header-icons">
												<li className={isActive('/cart') ? 'current-list-item' : ''}>
													<Link to="/cart">
														<div className="header-icons">
															<i className="fas fa-shopping-cart"></i>
														</div>
													</Link>
												</li>
												<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
												<li className={isActive('/login') ? 'current-list-item' : ''}>
													<Link to="/login">
														<div className="header-icons">
															<i className="fas fa-user-alt"></i>
														</div>
													</Link>
												</li>
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
