import '../componentStyles/stats.css';
import { GiProgression } from 'react-icons/gi';
const NewStats = ({ text, quantity }) => {
    return (
        <div className='users new-users'>
            <h3>{text}</h3>
            <div className='chart-container'>
                <GiProgression size='40px' />
                <span>{quantity}</span>
            </div>
        </div>
    );
}

export default NewStats;