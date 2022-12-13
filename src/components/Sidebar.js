import '../componentStyles/sidebar.css';
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {

    const logout = () => {

    }
    let navigate = useNavigate();

    return (
        <aside className='sidebar'>
            <ul>
                <button onClick={() => {
                    navigate('/');
                }}>Dashboard</button>
                <button onClick={() => {
                    navigate('/manage-users');
                }}>Manage Users</button>
                <button onClick={() => {
                    navigate('/manage-sellers');
                }}>Manage Sellers</button>
            </ul>
            <div className='logout-container'>
                <BiLogOut />
                <button onClick={logout}>Logout</button>
            </div>
        </aside>
    );
}

export default Sidebar;