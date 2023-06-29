import '../pageStyles/login.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);

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
            setLoginError(data.error);
        }
        else {
            navigate('/users');
        }
    }

    return (
        <main className="login">

            <div className="intro_text">
                <h1>Sign in to <br /> admin accessorize</h1>
                <p>
                    Welcome to Accessorize, a leading company in the world of fashion accessories!
                    As a trendsetter in the industry, Accessorize has been dedicated to bringing
                    the latest and most stylish accessories since its establishment.
                    With our passion for fashion and unwavering dedication to customer satisfaction,
                    Accessorize is here to inspire, accessorize, and make a statement.
                </p>
            </div>

            <form className="login_container" onSubmit={signIn}>
                <input id="email_login" type="email" placeholder="Enter Email" autoComplete="email" ref={emailRef} required></input>
                <input id="password_login" type="password" placeholder="Password" autoComplete="current-password" ref={passwordRef} required></input>
                <button className='default_button'>Sign In</button>
                {loginError && <div className='login_error'>{loginError}</div>}
            </form>

        </main>
    );
}

export default Login;