import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';
import { useEffect, useState } from 'react';

const Seller = () => {
    const [currentSellersCount, setCurrentSellersCount] = useState(0);
    const [recentSellersCount, setRecentSellersCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/admin/sellersCount").then((res) => {
            return res.json();
        }).then((data) => {
            setCurrentSellersCount(data.sellersCount);
        });

        fetch("http://localhost:8000/admin/recentSellers").then((res) => {
            return res.json();
        }).then((data) => {
            setRecentSellersCount(data);
        })
    }, []);
    return (
        <div className='container'>
            <Sidebar />
            <div className='user-content'>
                <div className='user-stats'>
                    <CurrentStats text='Current Sellers' quantity={currentSellersCount} />
                    <NewStats text='New Sellers' quantity={recentSellersCount} />
                </div>
                <p>Sellers</p>
                <ViewTable />
            </div>

        </div>

    );
}

export default Seller;