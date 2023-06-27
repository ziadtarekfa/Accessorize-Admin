import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../componentStyles/edit-dialog.css';
const EditDialog = ({ user, isEditDialogOpen, setIsEditDialogOpen }) => {

    const editDialog = useRef();
    const saveChanges = (e) => {
        e.preventDefault();
        setIsEditDialogOpen(false);

        fetch('http://localhost:8000/admin/updateUser', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then((res) => {
            if (res.ok) {
                toast.info("Changes saved successfully !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        });

    }
    return (
        <>
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
                        <button className='save_button' type='submit' onClick={saveChanges} >Save Changes</button>
                    </div>

                </form>
            </dialog>
            <ToastContainer />
        </>
    );
}

export default EditDialog;