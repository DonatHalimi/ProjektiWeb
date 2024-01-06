


import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from "../context/shop-context";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsArrowsAngleContract } from "react-icons/bs";
import { toast } from "react-toastify";

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

    //  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const cart = useContext(ShopContext);

    const navigate = useNavigate();

    // const toggleEnlargedPicture = () => {
    //     setIsImageEnlarged(!isImageEnlarged);
    // };

    // useEffect(() => {
    //     const handleKeyDown = (event) => {
    //         if (event.key === 'Escape' && isImageEnlarged) {
    //             toggleEnlargedPicture();
    //         }
    //     };
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [isImageEnlarged, toggleEnlargedPicture]);

    const handleAddToCart = () => {
        cart.addOneToCart(book.id);

        toast.success("Libri është shtuar në shportë!", {
            position: 'top-right',
            style: {
                cursor: 'pointer',
                transition: 'opacity 2s ease-in',
            },
            onClick: () => {
                navigate("/cart");
            },
        });
    };

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

            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    /*   const byteArray = new Uint8Array(Foto.data);
       const binaryString = byteArray.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
       const base64String = btoa(binaryString);
    */

    const cartStyle = [{
        color: 'white',
        transition: 'all 0.6s',
        ':hover': {
            color: '#F27423',
        },
    }];

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
                                    <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
                                        <i className="fas fa-shopping-cart"></i> Add to Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </Fragment >

        </>
    );
}

export default BookDetails;