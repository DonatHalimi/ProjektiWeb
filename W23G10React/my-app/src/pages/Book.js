import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { toast } from 'react-toastify';

function Book(props) {
  const book = props.book;
  console.log("Book prop:", book);
  
  const cart = useContext(ShopContext);
  const navigate = useNavigate();

// ...

if (!book || !('id' in book)) {
  console.log("Invalid book data:", book);
  // Handle the case when book or book.id is undefined
  return <div>Loading...</div>;
}

// ...


const handleAddToCart = () => {
  console.log('Adding to cart...', book.id);
  cart.addOneToCart(book.id);

  toast.success('Produkti është shtuar në shportë!', {
    // ...
  }, 50);
};

  return (
    <div className="product-container">
      <div className="product" key={book.id}>
        <div className="card">
          <Link to={`/book/${book.id}`} className="product-details-link">
            <div className="card_header">
              <h3>{book.title}</h3>
              <p className="price">{book.price}</p>
            </div>
          </Link>
          <button className="cartButton" onClick={() => { console.log('Button clicked!'); handleAddToCart(); }} title='Add To Cart'>
              <AiOutlineShoppingCart style={{ color: 'black', fontSize: '18px' }} />
            </button>

        </div>
      </div>
    </div>
  );
}

export default Book;
