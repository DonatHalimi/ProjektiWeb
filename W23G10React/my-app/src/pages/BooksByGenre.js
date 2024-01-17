// BooksByGenre.js
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import Footer from "../components/Footer";
import GenreList from '../components/GenreList';
import ReactPaginate from 'react-paginate';
import Book from '../components/Book';

function BooksByGenre(props) {
    const { book, showToast } = props;
    const { genreName } = useParams();
    const [books, setBooks] = useState([]);

    // State dhe variablat per pagination
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;
    const pageCount = Math.ceil(books.length / itemsPerPage);

    // Bejme fetch librat duke u bazu ne genre kur komponenti behet mount ose kur genreName ndryshon 
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

    // Kalkulimi i offset-it dhe ndarja e librave per pagination
    const offset = currentPage * itemsPerPage;
    const currentBooks = books.slice(offset, offset + itemsPerPage);

    // Ben handle page click per pagination
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    // JSX per me render faqen
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

            {/* Shfaqja e librave, ose mesazhi se nuk ka liber per genre te caktuar */}
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
