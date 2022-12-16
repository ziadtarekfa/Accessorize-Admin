import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';

const Seller = () => {
    return (
        <div className='container'>
            <Sidebar />
            <div className='user-content'>
                <div className='user-stats'>
                    <CurrentStats text='Current Sellers' quantity='700' />
                    <NewStats text='New Sellers' quantity='100' />
                </div>
                <p>Sellers</p>
                <ViewTable />
            </div>

        </div>

    );
}

export default Seller;