import React, { createContext, useState } from 'react';

export const FavouriteContext = createContext({
  items: [],
  addItemToFavourite: () => { },
  removeItemFromFavourite: () => { },
});

export function FavouriteContextProvider({ children }) {
  const [favouriteItems, setFavouriteItems] = useState([]);

  // Krijojme nje funksion per shtim te produktit ne wishlist
  function addItemToFavourite(id) {
    const itemExists = favouriteItems.find(item => item.id === id);

    if (!itemExists) {
        setFavouriteItems(prevItems => [
        ...prevItems,
        { id: id, quantity: 1 }
      ]);
    }
  }

  // Krijojme nje funksion per largim te produktit nga wishlist
  function removeItemFromFavourite(id) {
    setFavouriteItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  }

  const contextValue = {
    items: favouriteItems,
    addItemToFavourite,
    removeItemFromFavourite,
  };

  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;