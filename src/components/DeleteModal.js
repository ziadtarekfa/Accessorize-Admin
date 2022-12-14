import '../componentStyles/delete-modal.css';
const DeleteModal = ({ setIsDelete }) => {
    return (
        <div className='bg-dark'>
            <div className='delete-modal'>
                <p>Are you sure you want to delete ziadtarekfa@gmail.com?</p>
                <p>Please, rethink your decision because you will not be able to undo this action.</p>
                <hr />
                <div>
                    <button className="cancel-btn" onClick={() => setIsDelete(false)}>Cancel</button>
                    <button className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;