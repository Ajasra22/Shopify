import './App.css';
import Navbar from './components/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login.js';
import Register from './components/Register.js';
import User from './components/User.js';
import { useSelector } from 'react-redux'
import Buy from './components/Buy';
import Sell from './components/Sell';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  const {isAuth} = useSelector(state=> state.Authenticated);
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
      {!isAuth && <Route path="/home" element={<Home/>}/>}
        {!isAuth && <Route path="/login" element={<Login />}/>}
        {!isAuth && <Route path="/register" element={<Register />}/>}
        {isAuth && <Route path='/user' element={<User />}/>}
        {isAuth && <Route path='/buy' element={<Buy />}/>}
        {isAuth && <Route path='/sell' element={<Sell />}/>}
        {isAuth && <Route path='/cart' element={<Cart />}/>}
        {isAuth &&  <Route path="*" element={<User />}/>}
        {!isAuth && <Route path="*" element={<Home />}/>}
      </Routes>
    </Router>
       
    </div>
   
    
  );
}

export default App;
