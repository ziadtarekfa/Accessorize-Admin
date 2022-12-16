import '../pageStyles/login.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    let navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email === 'test@gmail.com' && password === 'test') {
            navigate('/manage-sellers');
        }
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
        </div>


    );
}

export default Login;