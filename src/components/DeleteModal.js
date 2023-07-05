import '../componentStyles/delete-modal.css';
import { toast } from 'react-toastify';
const DeleteModal = ({ setIsDelete, user, currentUsers, userType }) => {

    const deleteUser = async () => {
        let deletePath;
        if (userType === 'customers') {
            deletePath = 'http://localhost:8000/admin/deleteUser';
        }
        else {
            deletePath = 'http://localhost:8000/admin/deleteSeller';
        }

        const response = await fetch(deletePath, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        });

        if (response.ok) {
            const index = currentUsers.findIndex((item) => item.email === user.email);
            currentUsers.splice(index, 1);
            setIsDelete(false);
            toast.success("Successful Deletion !", {
                position: 'top-right'
            });
        }
    }

    return (
        <div className='bg-dark'>
            <div className='delete-modal'>
                <p>{`Are you sure you want to delete ${user.email}`}</p>
                <p>Please, rethink your decision because you will not be able to undo this action.</p>
                <hr />
                <div className='delete-cancel-container'>
                    <button className="cancel-btn" onClick={() => setIsDelete(false)}>Cancel</button>
                    <button className="delete-btn" onClick={() => deleteUser()}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;