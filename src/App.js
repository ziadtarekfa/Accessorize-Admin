import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Seller from './pages/Seller';
import User from './pages/User';
import EditProfile from './pages/EditProfile';
import PrivateRoutes from './utils/PrivateRoutes';
import CreateAccount from './pages/CreateAccount';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <BrowserRouter >
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path='/sellers/:id' element={<EditProfile />} />
            <Route path='/users' element={<User />} />
            <Route path='/sellers' element={<Seller />} />
            <Route path='/create-account' element={<CreateAccount />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter >
  );
}

export default App;
