import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Singleproduct from './pages/Singleproduct';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/singleproduct' element={<Singleproduct />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
