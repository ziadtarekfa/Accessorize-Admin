import '../componentStyles/edit-modal.css';
const EditDataModal = ({ setIsEdit }) => {
    return (
        <div className="bg-dark">
            <div className="edit-modal">
                <h3>Edit User Data</h3>
                <label style={{ 'marginTop': '20px' }}>Name</label>
                <input></input>
                <label>Email Address</label>
                <input></input>
                <label>Phone No</label>
                <input></input>
                <label>Gender</label>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <div>
                    <button onClick={() => setIsEdit(false)} className='cancel-btn'>Cancel</button>
                    <button className='save-changes-btn'>Save Changes</button>
                </div>
            </div>

        </div>
    );
}

export default EditDataModal;