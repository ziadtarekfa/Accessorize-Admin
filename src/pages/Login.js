import '../pageStyles/login.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [err, setError] = useState(null);

    const signIn = async (e) => {
        e.preventDefault();
        const admin = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        const response = await fetch("http://localhost:8000/admin/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin),
            credentials: "include"
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
        }
        else {
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
                {err && <div style={{ "marginTop": 20, "color": "red" }}>{err}</div>}
            </form>


        </main>
    );
}

export default Login;