import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from "../components/Footer";
import { useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from "../context/shop-context";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsArrowsAngleContract } from "react-icons/bs";
import { toast } from "react-toastify";
import { FavouriteContext } from '../context/favourite-context';
import SimilarProducts from '../components/SimilarBooks';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [isbn, setIsbn] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [publicationDate, setPublicationDate] = useState("");
    const [genre, setGenre] = useState("");
    const [author, setAuthor] = useState("");
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const cart = useContext(ShopContext);
    const favourite = useContext(FavouriteContext);

    const navigate = useNavigate();

    // Funksioni i cili shton nje liber ne shopping cart
    const handleAddToCart = () => {
        cart.addOneToCart(book.id);

        toast.success("Libri është shtuar në shportë!", {
            onClick: () => {
                navigate("/cart");
            },
        });
    };

    // Funksioni i cili shton nje liber ne favourites
    const handleAddToFavourite = () => {
        favourite.addItemToFavourite(book.id);

        toast.success("Libri është shtuar në favourites!", {
            onClick: () => {
                navigate("/favourite");
            },
        });
    };

    // Bejme fetch nje liber te caktuar me id e atij libri te klikuar me useEffect duke perdorur API kur komponenti behet mount
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`https://localhost:7132/api/Book/Get/${id}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const book = data[0];
                console.log("Fetched product data:", data);
                setBook(data);
                setTitle(book.title)
                setPrice(book.price);
                setIsbn(book.isbn);
                setDescription(book.description);
                setCoverImage(book.coverImage);
                setPublicationDate(book.publicationDate);
                setGenre(book.genre);
                setAuthor(book.author)

                const genreResponse = await fetch(`https://localhost:7132/api/Book/GetBooksByGenre/${book.genre}`);
                if (genreResponse.ok) {
                    const genreData = await genreResponse.json();
                    console.log("Books of the same genre:", genreData);
                }
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    // Stilizimi i butonit Add to Cart dhe Add to Favourites
    const cartStyle = [{
        color: 'white',
        transition: 'all 0.6s',
        marginRight: '75px',
        ':hover': {
            color: '#F27423',
        },
    }];

    const favouriteStyle = [{
        color: 'white',
        transition: 'all 0.6s',
        marginRight: '26px',
        ':hover': {
            color: '#F27423',
        },
    }];

    // JSX per me render faqen
    return (
        <>
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

                <div class="breadcrumb-section hero-bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 offset-lg-2 text-center">
                                <div class="breadcrumb-text">
                                    <p>See more Details</p>
                                    <h1>Single Product</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-product mt-150 mb-150">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="single-product-img">
                                    <img
                                        src={`https://localhost:7207/Images/${book.coverImage}`}
                                        alt={book.title}
                                        id='photo'
                                        onLoad={() => console.log('Image loaded successfully')}
                                        onError={() => console.log('Error loading image')}
                                        style={{ position: "relative", left: "150px", maxWidth: '60%', maxHeight: '60%' }}
                                        className="enlarged-image"
                                        onClick={() => setIsImageEnlarged(!isImageEnlarged)} />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="single-product-content">
                                    <h3>{book.title}</h3>
                                    <h4>{book.author}</h4>
                                    <p><strong>Genre: </strong>{book.genre}</p>
                                    <p class="single-product-pricing">${book.price}</p>
                                    <p>{book.description}</p>
                                    <div className='cardButtons'>
                                        <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                                            <i className="fas fa-shopping-cart"></i> Add to Cart
                                        </a>

                                        <a style={Object.assign({}, ...favouriteStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToFavourite(); }}>
                                            <i className="fas fa-heart"></i> Add to Favourites
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SimilarProducts className="col-lg-2 col-md-7 text-center mx-auto" genre={book.genre} currentBookId={book.id} />

                <Footer />

            </Fragment >
        </>
    );
}

export default BookDetails;