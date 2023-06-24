import { useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import { useRef, useState } from 'react';
import EditDialog from './EditDialog';

const UserTable = ({ currentUsers, setIsDelete, setSelectedUser, selectedUser }) => {
    const navigate = useNavigate();
    const editDialog = useRef();
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [user, setUserToBe] = useState(null);
    return (
        <>
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
                                        setIsEditDialogOpen(true);
                                        setSelectedUser(user)
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
        
            {
                selectedUser && <EditDialog isEditDialogOpen={isEditDialogOpen} setIsEditDialogOpen={setIsEditDialogOpen} user={selectedUser} />
            }
        </>
    );
}

export default UserTable;