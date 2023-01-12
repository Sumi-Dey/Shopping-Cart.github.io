import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MainProduct from './Components/MainProduct';

function App() {
  return (
    <div className='maincontainer'>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mainproduct' element={<MainProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
