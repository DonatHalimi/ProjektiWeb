import React, { useContext, useEffect, useState } from 'react';
import { BsPlusLg, BsTrash3 } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
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
      toast.success('Libri është larguar nga shporta!', {
        position: 'top-right',
        style: {
          cursor: 'pointer',
          transition: 'opacity 2s ease-in',
        },
      });
    }, 50);
  };

  const handleRemoveFromCart = () => {
    cart.deleteFromCart(id);

    setTimeout(() => {
      toast.success('Libri është larguar nga shporta!', {
        position: 'top-right',
        style: {
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
    <>
      <tr className="table-body-row">
        {/* <td>
          <button  onClick={handleRemoveFromCart} title="Delete">
            <BsTrash3 />
          </button>
        </td> */}
        <td className="product-image">
          <Link to={`/book/${book.id}`}>
            <img
              src={`https://localhost:7207/Images/${book.coverImage}`}
              alt={book.title}
              id='photo'
              onLoad={() => console.log('Image loaded successfully')}
              onError={() => console.log('Error loading image')}
              style={{ maxWidth: '150px', maxHeight: '250px' }} />
          </Link>
        </td>
        <td className="product-name">
          <Link to={`/book/${book.id}`}>
            <h5>{book.title}</h5>
          </Link>
        </td>
        <td className="product-price">
          ${price.toFixed(2)}
        </td>
        <td className="product-quantity">
          {quantity}
        </td>
        <td className="edit-buttons" style={{ borderRadius: "5px" }}>
          <button className="add-button" onClick={() => cart.addOneToCart(id)} title="Add">
            <BsPlusLg />
          </button>
          <button className="remove-button" onClick={handleRemoveOneFromCart} title="Remove">
            <AiOutlineMinus />
          </button>
          <button className='delete-button' onClick={handleRemoveFromCart} title="Delete">
            <BsTrash3 />
          </button>
        </td>
        <td className="product-total">
          ${totalCost}
        </td>
      </tr>

  

    </>
  );
}

export default CartItem;
