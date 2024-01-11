import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavouriteItem from './favourite-items';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FavouriteContext } from '../context/favourite-context';
import Menu from './Menu';
import Footer from './Footer';

const Favourite = () => {
    const { items, removeItemFromFavourite } = useContext(FavouriteContext);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    // Krijimi i nje funksioni per te kerkuar te dhenat nga API i produktit
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

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleRemoveFromFavourite = (id) => {
        removeItemFromFavourite(id);

        toast.success('Produkti është shtuar në shportë!', {
            onClick: () => {
                navigate('/cart');
            },
        });
    };
    const noItemsInWishlistStyles = {
        container: {
            marginTop: "200px",
            textAlign: 'center',
            padding: '20px',
            width: "50%",
            marginLeft: "27%",
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5',
        },
        text: {
            fontSize: '18px',
            marginBottom: '10px',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            fontSize: '16px',
        },
    };

    // Renderimi i HTML formes per shfaqjen e Wishlist
    return (
        <>
            <Menu />
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
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title">
                        <h3>Your <span className="orange-text">Favourites</span></h3>
                        <p>Take a moment to explore the pages that promise excitement, knowledge, and pure enjoyment.</p>
                    </div>
                </div>
            </div>

            <div className='main-content-wishlist' style={{ marginTop: "-250px", paddingRight: "20px" }}>
                <h1 style={{ position: "relative", top: "50px", opacity: "0" }}>Wishlist</h1>
                {items.length > 0 ? (
                    <div className='wishlist-items' style={{ paddingTop: "50px", paddingBottom: "200px", marginTop: "140px", marginBottom: "200px", gap: "50px" }}>
                        {items.map((item) => (
                            <div key={item.id} className='wishlist-item'>
                                <FavouriteItem id={item.id} books={books} onRemoveFromWishlist={() => handleRemoveFromFavourite(item.id)} key={item.id} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='noItemsInWishlist' style={noItemsInWishlistStyles.container}>
                        <p style={noItemsInWishlistStyles.text}>Ju nuk keni ndonjë produkt në listën e dëshirave.</p>
                        <Link to="/index" style={noItemsInWishlistStyles.link}>Kthehu në faqen kryesore</Link>
                    </div>
                )}
            </div>

            <div style={{ height: "200px" }}></div>
            <Footer />
        </>
    );
};

export default Favourite;