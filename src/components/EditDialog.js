import { useRef } from 'react';
import '../componentStyles/edit-dialog.css';
const EditDialog = ({ user, isEditDialogOpen, setIsEditDialogOpen }) => {
    const editDialog = useRef();
    console.log(user);
    return (
        <dialog ref={editDialog} open={isEditDialogOpen} >
            <form  >
                <div className='profile_image_container' >
                    <h2>Edit Profile</h2>
                </div>
                <h4>Personal info</h4>
                <div className='flex_box_column'>
                    <label>Name</label>
                    <input defaultValue={user.firstName} type="text" required onChange={(e) => {
                        user.firstName = e.target.value;
                    }} />
                </div>

                <div className='flex_box_column'>
                    <label>Email </label>
                    <input defaultValue={user.email} type="email" required onChange={(e) => {
                        user.email = e.target.value;
                    }} />
                </div>
                <div className='flex_box_column'>
                    <label>Phone number</label>
                    <input defaultValue={user.phoneNumber} type="text" required onChange={(e) => {
                        user.phoneNumber = e.target.value;
                    }} />
                </div>
                <div>

                    <button className='cancel_button' type='reset' onClick={() => {
                        setIsEditDialogOpen(false);
                    }}>Cancel</button>
                    <button className='save_button' type='submit' >Save Changes</button>
                </div>

            </form>
        </dialog>
    );
}

export default EditDialog;