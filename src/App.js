import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import Product from './components/Products';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Error } from './components/Error';
import { Login } from './components/Login';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Address from './components/Address';
import OrderDetails from './components/OrderDetails';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import SavedAdd from './components/SavedAdd';


function App() {
  return (
    <div className='app'>
      <Router>
      <Navbars/>
      <Routes>
        <Route path='/Home' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path="/shipping" element={<Address/>}/>
        <Route path='/orderdetails' element={<OrderDetails/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/savedaddress' element={<SavedAdd/>}/>
      </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
