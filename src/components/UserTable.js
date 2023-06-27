import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import { useState } from 'react';
import EditDialog from './EditDialog';

const UserTable = ({ currentUsers, setIsDelete, setSelectedUser, selectedUser }) => {

    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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