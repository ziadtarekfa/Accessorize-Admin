import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';

import '../pageStyles/seller.css';
const Seller = () => {
    return (
        <div className='seller'>
            <Header />
            <div>
                <Sidebar />
                <div className='user-content'>
                    <div className='user-stats'>
                        <CurrentStats text='Current Sellers' quantity='700' />
                        <NewStats text='New Sellers' quantity='100' />
                    </div>
                    <p>Sellers</p>
                    <ViewTable text="Seller" />
                </div>
            </div>
        </div>
    );
}

export default Seller;