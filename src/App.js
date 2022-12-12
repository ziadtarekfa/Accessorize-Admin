import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
