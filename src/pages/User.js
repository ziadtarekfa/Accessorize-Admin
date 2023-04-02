import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';
import { useEffect, useState } from 'react';


const User = () => {
    const [currentUsersCount, setCurrentUsersCount] = useState(0);
    const [recentUsersCount, setRecentUsersCount] = useState(0);
    useEffect(() => {
        fetch("http://localhost:8000/admin/usersCount").then((res) => {
            return res.json();
        }).then((data) => {
            setCurrentUsersCount(data.usersCount);
        });

        fetch("http://localhost:8000/admin/recentUsers").then((res) => {
            return res.json();
        }).then((data) => {
            setRecentUsersCount(data);
        })
    }, []);

    return (
        <div className='container'>

            <Sidebar />
            <div className='user-content'>
                <div className='user-stats'>
                    <CurrentStats text='Current Users' quantity={currentUsersCount} />
                    <NewStats text='New Users' quantity={recentUsersCount} />
                </div>
                <p>Users</p>
                <ViewTable />

            </div>

        </div>
    );
}

export default User;