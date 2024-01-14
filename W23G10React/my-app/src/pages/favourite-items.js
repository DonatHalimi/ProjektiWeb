import React, { useContext, useEffect, useState } from 'react';
import { FavouriteContext } from '../context/favourite-context';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { toast } from 'react-toastify';

function FavouriteItem(props) {
    const cart = useContext(ShopContext);
    const favourite = useContext(FavouriteContext);
    const { books } = props;
    const navigate = useNavigate();
    const id = props.id;
    const book = books.find((book) => book.id === id);

    if (!book) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        cart.addOneToCart(book.id);

        toast.success('Produkti është shtuar në shportë!', {
            onClick() {
                navigate("/cart");
            }
        }, 50);
    };

    const handleRemoveFromFavourite = () => {
        favourite.removeItemFromFavourite(book.id);

        toast.success('Produkti është larguar nga favourites!');
    };

    const cartStyle = {
        color: 'white',
        transition: 'all 0.6s',
        ':hover': {
            color: '#F27423',
        },
    };

    return (
        <>
			<div className="product-container" style={{ marginRight: "1000px" }}>
                <div className="col-lg-3 col-md-6 text-center mx-auto">
                    <Link to={`/book/${book.id}`} className="product-details-link">
                        <div className="single-product-item" style={{ width: '300px' }}>
                            <div className="product-image">
                                <a>
                                    <img
                                        src={`https://localhost:7207/Images/${book.coverImage}`}
                                        alt={book.title}
                                        id='photo'
                                        onLoad={() => console.log('Image loaded successfully')}
                                        onError={() => console.log('Error loading image')}
                                        style={{ maxWidth: '250px', maxHeight: '300px' }}
                                    />
                                </a>
                            </div>

                            <div className='cardButtons' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <a style={cartStyle} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                                    <i className="fas fa-shopping-cart"></i> Add to Cart
                                </a>
                                <a style={cartStyle} className="cart-btn" onClick={handleRemoveFromFavourite}>
                                    <i className="fas fa-trash" style={{ marginLeft: "5px" }}></i>
                                </a>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FavouriteItem;
