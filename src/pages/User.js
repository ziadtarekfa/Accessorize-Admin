import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import ViewTable from '../components/ViewTable';
import { CHART_SVG, GROWING_CHART_SVG } from '../utils/constants';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const User = () => {
    const [currentUsersCount, setCurrentUsersCount] = useState(0);
    const [recentUsersCount, setRecentUsersCount] = useState(0);
    useEffect(() => {
        fetch("http://localhost:8000/admin/usersCount").then((res) => {
            return res.json();
        }).then((data) => {
            setCurrentUsersCount(data.usersCount);
        }).catch((err) => {
            toast.error(err, {
                position: 'top-right'
            })
        });

        fetch("http://localhost:8000/admin/recentUsers").then((res) => {
            return res.json();
        }).then((data) => {
            setRecentUsersCount(data);
        }).catch((err) => {
            toast.error(err, {
                position: 'top-right'
            })
        });
    }, []);

    return (
        <div className='container'>

            <Sidebar />
            <div className='user-content'>
                <div className='cards_container'>
                    <Card text='Current Customers' quantity={currentUsersCount} svgIcon={CHART_SVG} color={'#E3F5FF'} />
                    <Card text='New Customers' quantity={recentUsersCount} svgIcon={GROWING_CHART_SVG} color={'#E5ECF6'} />
                </div>
                <p>Customers</p>
                <ViewTable userType={"customers"} />

            </div>
            <ToastContainer />

        </div>
    );
}

export default User;