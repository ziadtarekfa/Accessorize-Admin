import '../componentStyles/sidebar.css';
import { BiLogOut } from 'react-icons/bi'
const Sidebar = () => {

    const logout = () => {

    }
    return (
        <aside className='sidebar'>
            <ul>
                <button>Dashboard</button>
                <button>Manage Users</button>
                <button>Manage Sellers</button>
            </ul>
            <div className='logout-container'>
                <BiLogOut />
                <button onClick={logout}>Logout</button>
            </div>
        </aside>
    );
}

export default Sidebar;