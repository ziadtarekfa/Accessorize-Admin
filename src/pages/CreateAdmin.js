import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import signUp from '../assets/undraw_sign_up_n6im.svg';
import '../pageStyles/createAccount.css';
import Sidebar from '../components/Sidebar';
const CreateAdmin = () => {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const createAccount = async (e) => {
        e.preventDefault();

        const admin = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        if (confirmPasswordRef.current.value !== admin.password) {
            toast.error('Passwords don\'t match !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            const response = await fetch("http://localhost:8000/admin/signup", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(admin),
                credentials: "include"
            });
            const data = await response.json();

            if (!response.ok) {
                toast.error(`${data}!`, {
                    position: toast.POSITION.TOP_RIGHT
                });

            }
            else {
                toast.success('Admin created successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }

        }

    }


    return (
        <div className='container'>
            <Sidebar />
            <div className="create_account">
                <img src={signUp} alt='sign_up' />
                <form className='profile_form' onSubmit={createAccount}>

                    <h2>Create admin account</h2>
                    <p>Create an admin account to manage customers and sellers</p>

                    <div className='flex_box_column'>
                        <label>Name</label>
                        <input type="text" required ref={nameRef} />
                    </div>

                    <div className='flex_box_column'>
                        <label>Email </label>
                        <input type="email" required ref={emailRef} />
                    </div>
                    <div className='flex_box_column'>
                        <label>Password</label>
                        <input type="password" required ref={passwordRef} />
                    </div>
                    <div className='flex_box_column'>
                        <label>Confirm Password</label>
                        <input type="password" required ref={confirmPasswordRef} />
                    </div>

                    <button className='save_button' type='submit' >Register</button>
                </form>

            </div>
            <ToastContainer />
        </div>
    );
}

export default CreateAdmin;