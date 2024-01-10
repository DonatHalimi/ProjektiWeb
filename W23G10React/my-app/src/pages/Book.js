import React, { useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toast } from 'react-toastify';

function Book(props) {
  const { book, showToast } = props;
  const cart = useContext(ShopContext);

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

  // Stilizimi per butonin Add to Cart
  const cartStyle = [{
    color: 'white',
    transition: 'all 0.6s',
    ':hover': {
      color: '#F27423',
    },
  }];

  return (
    <div className="row product-lists">
      <div key={book.id} className="col-lg-4 col-md-6 text-center mx-auto">
        <Link to={`/book/${book.id}`} className="product-details-link">
          <div className="single-product-item">
            <div className="product-image">
              <a>
                <img
                  src={`https://localhost:7207/Images/${book.coverImage}`}
                  alt={book.title}
                  id='photo'
                  onLoad={() => console.log('Image loaded successfully')}
                  onError={() => console.log('Error loading image')}
                  style={{ maxWidth: '150px', maxHeight: '250px' }} />
              </a>
            </div>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p className="product-price">
              {book.price}$
            </p>
            <a style={Object.assign({}, ...cartStyle)} className="cart-btn" onClick={(e) => { e.preventDefault(); handleAddToCart(); }}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Book;