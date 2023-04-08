import '../componentStyles/edit-modal.css';
import SuccessTick from '../assets/success_tick.svg';
import { useNavigate } from 'react-router-dom';
const EditModal = ({ setIsEditOpen }) => {

    const navigate = useNavigate();
    const handleOkBtn = () => {
        setIsEditOpen(false)
        navigate(-1);
    }

    return (
        <div className='bg-dark'>
            <div className='edit-modal'>
                <img src={SuccessTick} alt='Successful' />
                <h1>Great!</h1>
                <p>{`Changes made successfully`}</p>
                <div className='ok-container' style={{ "margin": 0 }}>
                    <button className="ok-btn" onClick={handleOkBtn}>OK</button>
                </div>
            </div>
        </div>
    );
}

export default EditModal;