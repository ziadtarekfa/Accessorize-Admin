import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Seller from './pages/Seller';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Header />
        <Routes>

          <Route path='/users' element={<User />} />
          <Route path='/sellers' element={<Seller />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
