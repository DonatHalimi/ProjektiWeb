import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Index from './pages/Index';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';

import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import ToTop from './pages/ToTop';

import Login from './pages/Login';
import Register from './pages/Register';

import ShopContextProvider from './context/shop-context';
import FavouriteContextProvider from './context/favourite-context';

import BookDetails from './pages/BookDetails';
import Book from './pages/Book';
import BooksByGenre from './pages/BooksByGenre';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <FavouriteContextProvider>
          <Router>
            <ToastContainer />
            <ToTop />
            <Routes>

              <Route path='/' element={<Login />}></Route>
              <Route path='/index' element={<Index />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/shop' element={<Shop />}></Route>
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/favourite' element={<Favourite />}></Route>
              <Route path='/footer' element={<Footer />}></Route>
              <Route path='/book' element={<Book />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path="/books/:genreName" element={<BooksByGenre />} />

            </Routes>
          </Router>
        </FavouriteContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;