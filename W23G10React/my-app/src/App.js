import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
//import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import ToTop from './pages/ToTop';
import Book from './pages/Book';
import ShopContextProvider from './context/shop-context';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <ToTop />
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/index' element={<Index />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/shop' element={<Shop />}></Route>

          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/book' element={<Book />}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
