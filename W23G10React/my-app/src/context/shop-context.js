import React, { createContext, useState, useEffect } from 'react';

// Krijimi i nje instance te Context per kontekstin e dyqanit
export const ShopContext = createContext({
  items: [],
  getBookQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function ShopContextProvider({ children }) {
  const [cartBooks, setCartBooks] = useState([]);
  const [books, setBooks] = useState([]);

  // Funksioni per te marrur te dhenat e librave
  function fetchBooks() {
    fetch("https://localhost:7132/api/Book/Get")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }

  // Krijimi i nje useEffect per te thirrur fetchBooks kur komponenti montohet
  useEffect(() => {
    fetchBooks();
  }, []);

  // Funksioni per te marrur sasine e produktit
  function getBookQuantity(id) {
    const quantity = cartBooks.find((book) => book.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  // Krijimi i nje funksioni per te shtuar produkt ne Cart
  function addOneToCart(id) {
    const quantity = getBookQuantity(id);

    if (quantity === 0) {
      // Produkti nuk eshte ne cart
      setCartBooks([
        ...cartBooks,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // Produkti eshte ne cart
      setCartBooks((cartBooks) =>
        cartBooks.map(
          (book) =>
            book.id === id
              ? { ...book, quantity: book.quantity + 1 } // if statement is true
              : book // if statement is false
        )
      );
    }
  }

  // Krijimi i nje funksioni per te larguar nje produkt nga Cart
  function removeOneFromCart(id) {
    const book = cartBooks.find((book) => book.id === id);

    if (book && book.quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartBooks((cartBooks) =>
        cartBooks.map((book) =>
          book.id === id ? { ...book, quantity: book.quantity - 1 } : book
        )
      );
    }
  }

  // Krijimi i nje funksioni per kthimin e kostose totale te shportes
  function getTotalCost() {
    let totalCost = 0;
    if (cartBooks && Array.isArray(cartBooks)) {
      cartBooks.forEach((cartItem) => {
        const book = books.find((book) => book.id === cartItem.id);
        if (book) {
          totalCost += book.price * cartItem.quantity;
        }
      });
    }
    return totalCost;
  }

  // Krijimi i nje funksioni per largimin e produkteve nga shporta
  function deleteFromCart(id) {
    setCartBooks((cartBooks) =>
      cartBooks.filter((currentBook) => currentBook.id !== id)
    );
  }

  // Krijimi i nje konteksti te shportes me vlerat e nevojshme
  const contextValue = {
    items: cartBooks,
    getBookQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  };

  // Kthen kontekstin e shportes te mbeshtjelle me <ShopContext.Provider> per te qene i perdorshem nga komponentet femije
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
