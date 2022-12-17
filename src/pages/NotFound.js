import '../componentStyles/not-found.css';
import lottie from "lottie-web";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundLogo from '../assets/animations/lottie.json';

const NotFound = () => {
    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: document.querySelector('#lottie-container'),
            animationData: NotFoundLogo,
        })

        return () => instance.destroy()
    }, [])
    let navigate = useNavigate();
    return (
        <div className='not-found'>
            <div id='lottie-container' />
            <div>
                <button onClick={() => { navigate('/') }}>Go Back To Home</button>
            </div>
        </div>
    );
}

export default NotFound;