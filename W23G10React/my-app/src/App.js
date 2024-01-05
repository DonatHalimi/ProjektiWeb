import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import ToTop from './pages/ToTop';
import Book from './pages/Book';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import ShopContextProvider from './context/shop-context';
import Register from './pages/Register';
import BookDetails from './pages/BookDetails';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ToastContainer />
          <ToTop />
          <Routes>
            <Route path='/singleproduct' element={<SingleProduct/>}></Route>

            <Route path='/' element={<Index />}></Route>
            <Route path='/index' element={<Index />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/footer' element={<Footer />}></Route>
            <Route path='/book' element={<Book />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
