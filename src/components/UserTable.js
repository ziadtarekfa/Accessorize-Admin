import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';

const UserTable = ({ currentUsers, setIsDelete, setSelectedUser }) => {
    const navigate = useNavigate();
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentUsers.map((user) => {
                        return (
                            <tr key={user._id}>

                                <td >{user.firstName}</td>
                                <td >{user.email}</td>
                                <td >{user.phoneNumber}</td>
                                <td>
                                    {/* DIALOG WILL BE HERE */}
                                    <BiEdit size='25px' onClick={() => {
                                        navigate(`/users/${user._id}`);
                                    }} />
                                </td>
                                <td>
                                    <GoTrashcan size='20px' onClick={() => {
                                        setIsDelete(true);
                                        setSelectedUser(user)
                                    }} />
                                </td>

                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}

export default UserTable;