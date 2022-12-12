import { useRef } from 'react';
import '../styles/login.css';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }
    return (
        <div className='login-container'>

            <h1>Accessorize Admin Login</h1>

            <form className='login' onSubmit={handleLogin}>
                <span>Please fill in your admin login details below</span>
                <label>Email address</label>
                <input type="email" required ref={emailRef}></input>
                <label>Password</label>
                <input type="password" required ref={passwordRef}></input>
                <button>Sign In</button>
            </form>
            {/* <img src={img} alt='background bars' className='bg-image' /> */}

        </div>


    );
}

export default Login;