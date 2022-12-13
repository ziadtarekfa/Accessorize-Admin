import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Seller from './pages/Seller';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/manage-users' element={<User />} />
          <Route path='/manage-sellers' element={<Seller />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
