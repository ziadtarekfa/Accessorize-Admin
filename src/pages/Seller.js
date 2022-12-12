import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


import '../pageStyles/seller.css';
const Seller = () => {
    return (
        <div className='seller'>
            <Header />
            <div>
                <Sidebar />
            </div>
        </div>
    );
}

export default Seller;