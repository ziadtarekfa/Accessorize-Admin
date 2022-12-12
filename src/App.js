import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Seller from './pages/Seller';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/manage-sellers' element={<Seller />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
