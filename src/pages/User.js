import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../pageStyles/user.css';



import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';

const User = () => {
    return (
        <div className='seller'>
            <Header />
            <div>
                <Sidebar />
                <div className='user-content'>
                    <div className='user-stats'>
                        <CurrentStats text='Current Users' quantity='100' />
                        <NewStats text='New Users' quantity='20' />
                    </div>
                    <p>Users</p>
                    <ViewTable text='User' />
                </div>
            </div>
        </div>
    );
}

export default User;