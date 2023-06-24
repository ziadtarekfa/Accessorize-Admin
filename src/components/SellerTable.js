import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';

const SellerTable = ({ currentUsers, setIsDelete, setSelectedUser }) => {
    const navigate = useNavigate();
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Birth Date</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    currentUsers.map((user) => {
                        return (
                            <tr key={user._id}>

                                <td >{user.firstName}</td>
                                <td >{user.lastName}</td>
                                <td >{user.gender}</td>
                                <td >{user.birthDate}</td>
                                <td >{user.email}</td>
                                <td >{user.phoneNumber}</td>
                                <td >{`${user.address.country}, ${user.address.state}`}</td>
                                <td>
                                    <BiEdit size='25px' onClick={() => {
                                        navigate(`/sellers/${user._id}`);
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

export default SellerTable;