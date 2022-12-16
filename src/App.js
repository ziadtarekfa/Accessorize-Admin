import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Seller from './pages/Seller';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/manage-users' element={<User />} />
          <Route path='/manage-sellers' element={<Seller />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
