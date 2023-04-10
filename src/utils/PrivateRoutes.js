import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
const PrivateRoutes = () => {

    const [authenticated, setAuth] = useState(null);

    useEffect(() => {

        fetch("http://localhost:8000/admin/isLoggedIn", { method: "GET", credentials: "include" }).then((res) => {
            if (res.ok) {
                setAuth(true);
            }
            else {
                setAuth(false);
            }
        }).catch((err) => {
            setAuth(false);
            console.log(err.message);
        });
    }, []);

    return (
        <>
            {
                authenticated !== null &&
                <>
                    {authenticated ? <Outlet /> : <Navigate to='/' />}
                </>
            }

        </>
    );
}

export default PrivateRoutes;