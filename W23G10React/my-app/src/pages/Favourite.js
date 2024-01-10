import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavouriteItem from './favourite-items';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FavouriteContext } from '../context/favourite-context';
import Menu from './Menu';
import Footer from './Footer';

const Favourite = () => {

    // Merr kontekstin e dyqanit nga komponenti ShopContext
    const { items, removeItemFromFavourite } = useContext(FavouriteContext);
    const [showAlertRemove, setShowAlertRemove] = useState(false);

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
            position: 'top-right',
            style: {
                marginTop: '70px',
                cursor: 'pointer',
                transition: 'opacity 2s ease-in',
            },
            onClick: () => {
                navigate('/Cart');
            },
        }, 50);
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

            <div className='main-content-wishlist'>
                <h1 style={{ position: "relative", top: "50px", opacity: "0" }}>Wishlist</h1>
                {items.length > 0 ? (
                    <div className='wishlist-items' style={{ paddingTop: "50px", paddingBottom: "200px", marginTop: "140px", marginBottom: "200px", gap: "100px" }}>
                        {items.map((item) => (
                            <div key={item.id} className='wishlist-item'>
                                <FavouriteItem id={item.id} books={books} onRemoveFromWishlist={() => handleRemoveFromFavourite(item.id)} key={item.id} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='noItemsInWishlist'>
                        <p>Ju nuk keni ndonjë produkt në listën e dëshirave.</p>
                        <Link to="/">Kthehu në faqen kryesore</Link>
                    </div>
                )}
            </div>

            <div style={{ height: '550px' }}></div>

            <Footer />
        </>
    );
};

export default Favourite;