import '../componentStyles/delete-modal.css';
const DeleteModal = ({ setIsDelete, user, currentUsers, setCurrentUsers }) => {

    const deleteUser = () => {
        if (window.location.pathname === "/sellers") {
            fetch('http://localhost:8000/admin/deleteSeller',
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email })
                })
                .then((_res) => {
                    const index = currentUsers.findIndex((item) => item.email === user.email);
                    currentUsers.splice(index, 1);
                    setIsDelete(false);
                });
        }
        else if (window.location.pathname === "/users") {
            fetch('http://localhost:8000/admin/deleteUser',
                {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email })
                })
                .then((_res) => {
                    const index = currentUsers.findIndex((item) => item.email === user.email);
                    currentUsers.splice(index, 1);
                    setIsDelete(false);
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