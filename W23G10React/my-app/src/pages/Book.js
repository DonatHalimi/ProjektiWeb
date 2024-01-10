import React, { useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

import { toast } from 'react-toastify';
import { FavouriteContext } from '../context/favourite-context';

function Book(props) {
  const { book, showToast } = props;
  const cart = useContext(ShopContext);
  const favourite=useContext(FavouriteContext);

  console.log(props);
  // Validate book data
  if (!book || !('id' in book)) {
    // Handle the case when book or book.id is undefined
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    cart.addOneToCart(book.id);

    showToast('Libri është shtuar në shportë!');
  };

  const handleAddToFavourite = () => {
    favourite.addItemToFavourite(book.id);

    setTimeout(() => {
      toast.success('Produkti është shtuar në wishlist!', {
        position: 'top-right',
        style: {
          marginTop: '70px',
          cursor: 'pointer',
          transition: 'opacity 2s ease-in',
        },
      
      });
    }, 50);
  };

  // Stilizimi per butonin Add to Cart
  const cartStyle = [{
    color: 'white',
    transition: 'all 0.6s',
    ':hover': {
      color: '#F27423',
    },
  }];

  return (
    <div className="col-lg-4 col-md-6 text-center mx-auto">
      <Link to={`/book/${book.id}`} className="product-details-link">
        <div className="single-product-item" style={{width:'300px'}}>
          <div className="product-image">
            <a>
              <img
                src={`https://localhost:7207/Images/${book.coverImage}`}
                alt={book.title}
                id='photo'
                onLoad={() => console.log('Image loaded successfully')}
                onError={() => console.log('Error loading image')}
                style={{ maxWidth: '250px', maxHeight: '300px' }}
              />
            </a>
          </div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <p className="product-price">
            {book.price}$
          </p>
          <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
            <i className="fas fa-shopping-cart"></i> 
          </a>

          <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToFavourite(); }}>
                                        <i className="fas fa-heart"></i>
                                    </a>
        </div>
      </Link>
    </div>
  );
}

export default Book;