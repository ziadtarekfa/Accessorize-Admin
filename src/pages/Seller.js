import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import { CHART_SVG, GROWING_CHART_SVG } from '../utils/constants';
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
                <div className='cards_container'>
                    <Card text='Current Sellers' quantity={currentSellersCount} svgIcon={CHART_SVG} color={'#E3F5FF'} />
                    <Card text='New Sellers' quantity={recentSellersCount} svgIcon={GROWING_CHART_SVG} color={'#E5ECF6'} />
                </div>
                <p>Sellers</p>
                <ViewTable userType={"sellers"} />
            </div>

        </div>

    );
}

export default Seller;