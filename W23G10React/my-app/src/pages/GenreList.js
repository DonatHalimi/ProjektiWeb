import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const GenreList = () => {
    const [genres, setGenres] = useState([]);
    const { genreName } = useParams();

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('https://localhost:7132/api/Genre/Get');
                setGenres(response.data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div className="product-section mt-120 mb-120">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-filters">
                        <ul>
                            <li className={genreName === undefined ? 'active' : ''}>
                                <Link to="/index">All</Link>
                            </li>
                            {genres.map((genre) => (
                                <li key={genre.id} className={genreName === genre.name ? 'active' : ''}>
                                    <Link to={`/books/${genre.name}`}>{genre.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenreList;
