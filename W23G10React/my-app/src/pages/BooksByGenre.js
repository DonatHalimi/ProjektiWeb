// BooksByGenre.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import GenreList from './GenreList';

function BooksByGenre(props) {
    
    const { book, showToast } = props;
    const { genreName } = useParams();
    const [books, setBooks] = useState([]);
    const cart = useContext(ShopContext);

    useEffect(() => {
        const fetchBooksByGenre = async () => {
            try {
                const response = await axios.get(`https://localhost:7132/api/Book/GetBooksByGenre?genreName=${genreName}`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books by genre:', error);
            }
        };

        fetchBooksByGenre();
    }, [genreName]);

    console.log(genreName);

    const handleAddToCart = (bookId) => {
        cart.addOneToCart(bookId);

       
    };

    const cartStyle = [{
        color: 'white',
        transition: 'all 0.6s',
        ':hover': {
            color: '#F27423',
        },
    }];

    return (
        <div>

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
                                <h1> {genreName} Books</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GenreList />

            <div className="product-container">

            {books.length > 0 ? (
                <div className="row product-lists"  style={{ marginLeft: '120px' ,marginTop:'30px'}}>
                    {books.map((book) => (
                        <div key={book.id} className="col-lg-4 col-md-6 text-center mx-auto">
                            <Link to={`/book/${book.id}`} className="product-details-link">
                                <div className="single-product-item " style={{width:'300px'}}>
                                    <div className="product-image">
                                        <a>
                                            <img
                                                src={`https://localhost:7207/Images/${book.coverImage}`}
                                                alt={book.title}
                                                id='photo'
                                                onLoad={() => console.log('Image loaded successfully')}
                                                onError={() => console.log('Error loading image')}
                                                style={{  maxWidth: '250px', maxHeight: '280px'  }} />
                                        </a>
                                    </div>
                                    <h3>{book.title}</h3>
                                    <p>Author: {book.author}</p>
                                    <p className="product-price">
                                        ${book.price}
                                    </p>
                                    <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(book.id); }}>
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </a>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-books-found">
                    <p>No books found for the genre: {genreName}</p>
                </div>)}
                </div>
            <Footer />

        </div>
    );
};

export default BooksByGenre;
