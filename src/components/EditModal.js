import '../componentStyles/edit-modal.css';
const EditModal = ({ setIsEditOpen }) => {

    return (
        <div className='bg-dark'>
            <div className='edit-modal'>
                <p>{`Changes made successfully`}</p>
                <hr />
                <div className='ok-container' style={{ "margin": 0 }}>
                    <button className="ok-btn" onClick={() => setIsEditOpen(false)}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;