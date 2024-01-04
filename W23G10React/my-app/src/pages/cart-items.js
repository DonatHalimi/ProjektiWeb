import React, { useContext, useEffect, useState } from 'react';
import { BsPlusLg, BsTrash3 } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/shop-context';

function CartItem(props) {
  const cart = useContext(ShopContext);
  const id = props.id;
  const quantity = props.quantity;

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://localhost:7132/api/Book/Get');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchBooks();
  }, []);

  const book = books.find((book) => book.id === id);
  console.log('Book data in CartItem:', book);

  const handleRemoveOneFromCart = () => {
    cart.removeOneFromCart(id);

    setTimeout(() => {
      toast.success('Produkti është larguar nga shporta!', {
        position: 'top-right',
        style: {
          marginTop: '70px',
          cursor: 'pointer',
          transition: 'opacity 2s ease-in',
        },
      });
    }, 50);
  };

  const handleRemoveFromCart = () => {
    cart.deleteFromCart(id);

    setTimeout(() => {
      toast.success('Produkti është larguar nga shporta!', {
        position: 'top-right',
        style: {
          marginTop: '70px',
          cursor: 'pointer',
          transition: 'opacity 2s ease-in',
        },
      });
    }, 50);
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  const price = parseFloat(book.price);
  const totalCost = (quantity * price).toFixed(2);

  return (
    <div className="cart-item">
      <div className="cart-card">
        <div className="cart-card-details">
          <h3 className="product-name">{book.title}</h3>
          <p className="quantity">{quantity} Total</p>
          <p className="total-cost">${totalCost}</p>
        </div>

        <div className="edit-buttons">
          <button className="add-button" onClick={() => cart.addOneToCart(id)} title="Add">
            <BsPlusLg />
          </button>
          <button className="remove-button" onClick={handleRemoveOneFromCart} title="Remove">
            <AiOutlineMinus />
          </button>
          <button className="delete-button" onClick={handleRemoveFromCart} title="Delete">
            <BsTrash3 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
