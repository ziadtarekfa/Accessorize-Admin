import '../componentStyles/sidebar.css';
import { BiLogOut } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();
    const activeStyle = {
        backgroundColor: "#323232"
    }
    const notActiveStyle = {
        backgroundColor: "transparent"
    }
    const logout = () => {
        fetch('http://localhost:8000/admin/logout').then((response) => {
            if (response.ok) {
                navigate('/');
            }
        }).catch((err) => {
            alert(err.message);
        });

    }

    return (
        <aside>
            <div className='manage-container'>
                <NavLink to='/users'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    Manage Users
                </NavLink>
                <NavLink to='/sellers'
                    style={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }>
                    Manage Sellers
                </NavLink>
            </div>
            <div className='logout-container' onClick={logout}>
                <BiLogOut size='25px' />
                <button>Logout</button>
            </div>
        </aside>
    );
}

export default Sidebar;