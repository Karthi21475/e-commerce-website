import { Route, Routes } from 'react-router-dom';
import Login from './pages/loginpage.jsx'
import Signup from './pages/signuppage.jsx'
import Homepage from './pages/Homepage.jsx'
import AddProductpage from './pages/AddProductpage.jsx'
import Adminchecker from './components/adminchecker.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/products' element={<ProductsPage/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path='/add-product' element={<Adminchecker><AddProductpage /></Adminchecker>}></Route>
      <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
  );
}

export default App
