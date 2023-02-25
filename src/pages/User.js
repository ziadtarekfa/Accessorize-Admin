import '../pageStyles/user.css';
import Sidebar from '../components/Sidebar';
import CurrentStats from '../components/CurrentStats';
import NewStats from '../components/NewStats';
import ViewTable from '../components/ViewTable';


const User = () => {
    return (
        <div className='container'>

            <Sidebar />
            <div className='user-content'>
                <div className='user-stats'>
                    <CurrentStats text='Current Users' quantity='100' />
                    <NewStats text='New Users' quantity='20' />
                </div>
                <p>Users</p>
                <ViewTable />

            </div>

        </div>
    );
}

export default User;