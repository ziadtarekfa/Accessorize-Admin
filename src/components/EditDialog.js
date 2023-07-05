import '../componentStyles/edit-dialog.css';
import { useEffect, useRef } from 'react';
import {toast } from 'react-toastify';

const EditDialog = ({ user, isEditDialogOpen, setIsEditDialogOpen }) => {

    const editDialog = useRef();
    useEffect(() => {
        if (isEditDialogOpen === true) {
            editDialog.current.close();
            editDialog.current.showModal();
            setIsEditDialogOpen(true);
        }
    }, [isEditDialogOpen, setIsEditDialogOpen]);


    const saveChanges = (e) => {
        e.preventDefault();
        editDialog.current.close();
        setIsEditDialogOpen(false);

        fetch('http://localhost:8000/admin/updateUser', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then((res) => {
            if (res.ok) {
                toast.success("Changes saved successfully !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        });

    }
    return (
    
            <dialog ref={editDialog}>
                <form  >

                    <h2>Edit Profile</h2>
                    <h4>Personal info</h4>
                    <div className='flex_box_column'>
                        <label>Name</label>
                        <input className='default_input' defaultValue={user.firstName} type="text" required onChange={(e) => {
                            user.firstName = e.target.value;
                        }} />
                    </div>

                    <div className='flex_box_column'>
                        <label>Email </label>
                        <input className='default_input' defaultValue={user.email} type="email" required onChange={(e) => {
                            user.email = e.target.value;
                        }} />
                    </div>
                    <div className='flex_box_column'>
                        <label>Phone number</label>
                        <input className='default_input' defaultValue={user.phoneNumber} type="text" required onChange={(e) => {
                            user.phoneNumber = e.target.value;
                        }} />
                    </div>
                    <div className='btns_container'>
                        <button className='default_button cancel_button' type='reset' onClick={() => {
                            editDialog.current.close();
                            setIsEditDialogOpen(false);
                        }}>Cancel</button>
                        <button className='default_button save_button' type='submit' onClick={saveChanges} >Save Changes</button>
                    </div>

                </form>
            </dialog>
     
      
    );
}

export default EditDialog;