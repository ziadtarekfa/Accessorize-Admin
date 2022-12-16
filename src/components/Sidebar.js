import '../componentStyles/sidebar.css';
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Sidebar = () => {

    const [isManageUsersPath, setManageUsersPath] = useState();
    let navigate = useNavigate();

    const logout = () => {
        navigate('/');
    }

    useEffect(() => {
        if (window.location.pathname === '/manage-users') {
            setManageUsersPath(true);
        }
        else {
            setManageUsersPath(false);
        }
    }, []);

    return (
        <aside>
            <div className='manage-container'>
                <button className={isManageUsersPath ? 'active' : ''} onClick={() => {
                    navigate('/manage-users');
                }}>Manage Users</button>
                <button className={isManageUsersPath ? '' : 'active'} onClick={() => {
                    navigate('/manage-sellers');
                }}>Manage Sellers</button>
            </div>
            <div className='logout-container' onClick={logout}>
                <BiLogOut size='25px' />
                <button>Logout</button>
            </div>
        </aside>
    );
}

export default Sidebar;