import '../componentStyles/edit-modal.css';
const EditDataModal = ({ setIsEdit, user }) => {


    const editUser = (e) => {
        e.preventDefault();
        setIsEdit(false);
    }

    return (
        <div className="bg-dark">
            <form className="edit-modal" onSubmit={editUser}>
                <h3>Edit User Data</h3>
                <label style={{ 'marginTop': '20px' }}>Name</label>
                <input required value={user.name}></input>
                <label>Email Address</label>
                <input required type='email' value={user.email}></input>
                <label>Phone No</label>
                <input required value={user.phoneNo}></input>
                <label>Gender</label>
                <select value={user.gender}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <div>
                    <button onClick={() => setIsEdit(false)} className='cancel-btn'>Cancel</button>
                    <button className='save-changes-btn'>Save Changes</button>
                </div>

            </form>

        </div>
    );
}

export default EditDataModal;