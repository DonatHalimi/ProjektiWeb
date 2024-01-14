// BooksByGenre.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import GenreList from './GenreList';
import ReactPaginate from 'react-paginate';
import { toast } from 'react-toastify';
import Book from './Book';

function BooksByGenre(props) {
    const { book, showToast } = props;
    const { genreName } = useParams();
    const [books, setBooks] = useState([]);
    const cart = useContext(ShopContext);
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
    const pageCount = Math.ceil(books.length / itemsPerPage);

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
    const cartStyle = [{
        color: 'white',
        transition: 'all 0.6s',
        ':hover': {
            color: '#F27423',
        },
    }];

    const offset = currentPage * itemsPerPage;
    const currentBooks = books.slice(offset, offset + itemsPerPage);

    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

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

            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center mt-20">
                    <div className="section-title">
                        <h3><span className="orange-text">Our</span> Books</h3>
                        <p>Take a moment to explore the pages that promise excitement, knowledge, and pure enjoyment.</p>
                    </div>
                </div>
            </div>

            <GenreList />

            <div className="product-container" style={{ marginLeft: "-50px" }}>
                {currentBooks.length > 0 ? (
                    <div className="row product-lists" style={{ marginLeft: '180px' }}>
                        {currentBooks.map((book) => (
                            <Book key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="no-books-found">
                        <p>No books found for the genre: {genreName}</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {currentBooks.length > 0 && (
                <div className="pagination-container" style={{ marginTop: "30px", textAlign: "center" }}>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={5}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        initialPage={currentPage}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        nextClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextLinkClassName={"page-link"}
                    />
                </div>
            )}

            <Footer />

        </div >
    );
};

export default BooksByGenre;
