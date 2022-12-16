import '../componentStyles/delete-modal.css';
const DeleteModal = ({ setIsDelete, user }) => {

    const deleteUser = () => {
        setIsDelete(false);
    }
    return (
        <div className='bg-dark'>
            <div className='delete-modal'>
                <p>Are you sure you want to delete ziadtarekfa@gmail.com?</p>
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