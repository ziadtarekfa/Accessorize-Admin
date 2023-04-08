import '../pageStyles/login.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    let navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        if (email === 'test@gmail.com' && password === 'test') {
            navigate('/users');
        }
    }

    return (
        <main className="sign_in">
            <div className="intro_text">
                <h1>Sign In to <br /> admin accessorize</h1>
            </div>
            <form className="sign_in_container" onSubmit={signIn}>
                <input id="email_sign_in" type="email" placeholder="Enter Email" ref={emailRef} required></input>
                <input id="password_sign_in" type="password" placeholder="Password" ref={passwordRef} required></input>
                <button className="default_button">Sign In</button>
            </form>
        </main>
    );
}

export default Login;