import '../componentStyles/sidebar.css';
import { BiLogOut } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = () => {

    const navigate = useNavigate();
    const activeStyle = {
        backgroundColor: "#323232"
    }
    const notActiveStyle = {
        backgroundColor: "transparent"
    }
    const logout = () => {
        fetch('http://localhost:8000/admin/logout', { credentials: "include" }).then((response) => {
            if (response.ok) {
                navigate('/');
            }
        }).catch((err) => {
            toast.error(err.message, {
                position: 'top-right'
            })
        });

    }

    return (
        <>
            <aside>
                <div className='manage-container'>
                    <NavLink to='/users'
                        style={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }>
                        Customers
                    </NavLink>
                    <NavLink to='/sellers'
                        style={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }>
                        Sellers
                    </NavLink>
                    <NavLink to='/create-account'
                        style={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }>
                        Create Admin
                    </NavLink>
                </div>
                <div className='logout-container' onClick={logout}>
                    <BiLogOut size='25px' />
                    <button>Logout</button>
                </div>

            </aside>
            <ToastContainer />
        </>

    );
}

export default Sidebar;