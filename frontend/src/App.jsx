import { Route, Routes } from 'react-router-dom';
import Login from './pages/loginpage.jsx'
import Signup from './pages/signuppage.jsx'
import Homepage from './pages/Homepage.jsx'
import AddProductpage from './pages/AddProductpage.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/add-product' element={<AddProductpage/>}></Route>
      <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
  );
}

export default App
