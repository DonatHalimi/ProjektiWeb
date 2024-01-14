import React, { useState, useEffect } from 'react';
import Book from './Book';

function SimilarBooks({ genre, currentBookId }) {
    const [similarBooks, setSimilarBooks] = useState([]);

    useEffect(() => {
        const fetchSimilarBooks = async () => {
            try {
                const response = await fetch(`https://localhost:7132/api/Book/GetBooksByGenre?genreName=${genre}`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                const data = await response.json();

                // Filtro librin aktual nga lista e librave të ngjashëm
                const filteredBooks = data.filter(book => book.id !== currentBookId);

                console.log('Similar Books Data:', filteredBooks);
                setSimilarBooks(filteredBooks);
            } catch (error) {
                console.error('Error fetching similar books:', error);
            }
        };

        fetchSimilarBooks();
    }, [genre, currentBookId]);

    return (
        <div>
            {similarBooks.length === 0 ? (
                <p>No similar products found.</p>
            ) : (
                <>
                    <h2 style={{ marginLeft: "300px" }}>Similar Books</h2>
                    <div className="row product-lists" style={{ marginRight: "450px", padding: "50px",  display: "flex", justifyContent: "space-between" }}>
                        {similarBooks.map((book) => (
                            <Book key={book.id} book={book} smallerSize={true} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default SimilarBooks;
