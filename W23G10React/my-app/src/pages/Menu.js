import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

function Menu() {
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
										<li className="current-list-item"><Link to="/index">Home</Link>
										</li>
										<li><Link to="/about">About</Link></li>
										<li><Link to="/contact">Contact</Link></li>
										<li><Link to="/shop">Shop</Link>
											<ul className="sub-menu">
												<li><Link to="/checkout">Checkout</Link></li>
												<li><Link to="/singleproduct">Single product</Link></li>
											</ul>
										</li>
										<li>
											<div className="header-icons">
												<Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
												<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
											</div>
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
	)
}
export default Menu;