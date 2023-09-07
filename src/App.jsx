import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';


function App() {
  

  return (
    <div className='App'>
    <Header/> 
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/products' element={<Products/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/cart' element={<Cart/>}/> 
    </Routes> 
    </div>
  )
}

export default App
