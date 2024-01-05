


import React, {  Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { ShopContext } from "../context/shop-context";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsArrowsAngleContract } from "react-icons/bs";


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
  

    const [showAlertCart, setShowAlertCart] = useState(false);



    const toggleEnlargedPicture = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isImageEnlarged) {
                toggleEnlargedPicture();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isImageEnlarged, toggleEnlargedPicture]);

    const handleAddToCart = () => {
        cart.addOneToCart(id);
        setShowAlertCart(true);

        setTimeout(() => {
            setShowAlertCart(false);
        }, 5000);
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
    return (
        <>
           <Fragment>
                
           <Menu />

            <div className='details-outer-container'>
            
                <div className='details-container'>
                    {isImageEnlarged ? (
                        <div className="product-image">
                            <div className="cardImg">
                            <a>
                                    <img
                                    src={`https://localhost:7207/Images/${book.coverImage}`}
                                    alt={book.title}
                                    id='photo'
                                    onLoad={() => console.log('Image loaded successfully')}
                                    onError={() => console.log('Error loading image')}
                                    style={{ maxWidth: '150px', maxHeight: '250px' }}
                                    className="enlarged-image"
                                    onClick={() => setIsImageEnlarged(!isImageEnlarged)} />
                                </a>
                                <div className="close-icon" onClick={() => setIsImageEnlarged(false)}>
                                    <BsArrowsAngleContract />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="product-image">
                            <div className="cardImg">
                            <a>
                                    <img
                                    src={`https://localhost:7207/Images/${book.coverImage}`}
                                    alt={book.title}
                                    id='photo'
                                    onLoad={() => console.log('Image loaded successfully')}
                                    onError={() => console.log('Error loading image')}
                                    style={{ maxWidth: '150px', maxHeight: '250px' }}
                                    className="enlarged-image"
                                    onClick={() => setIsImageEnlarged(!isImageEnlarged)} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>

               
                {/* isImageEnlarged kontrollon nese fotoja eshte e rritur, nese po nuk shfaqen infot e produktit */}
                {!isImageEnlarged && (
                    <div className="product-info">
                        <h2 id='product-name'>{book.title}</h2>
                        <p id="product-price">{book.price}</p>
                        <h2>{book.isbn}</h2>
                        <p>{book.publicationDate}</p>
                        <p>{book.genre}</p>
                        <p>{book.author}</p>

                        <p id='product-details'>{book.description}</p>
                    </div>
                )}

                {/* isImageEnlarged kontrollon nese fotoja eshte e rritur, nese po nuk shfaqen butonat */}
                {!isImageEnlarged && (
                    <div className="product-buttons">
                        <button className="cartButton" onClick={handleAddToCart} title='Add To Cart'>
                            <AiOutlineShoppingCart style={{ color: "black", fontSize: "18px", position: "relative", top: "2.3px" }} />
                        </button>
                    
                    </div>
                )}
            </div>

            {/* Thirrja e funksionit per me shfaq mesazhin e konfirmimit te shtimit te produktit ne Cart & Wishlist */}
            {showAlertCart && (
                <div className="alertCart">
                    <Link to="/Cart" className="cartLink">
                        <p>Produkti është shtuar në shportë me sukses!</p>
                    </Link>
                    <button className="cancelPopupButtonCart" onClick={() => setShowAlertCart(false)}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            )}

         

            <div style={{ height: "100px" }}></div>

            {/* isImageEnlarged kontrollon nese fotoja eshte e rritur, nese po nuk shfaqet footeri */}
            {!isImageEnlarged && (
                <Footer />
            )}

            </Fragment>

        </>
    );
}

export default BookDetails;