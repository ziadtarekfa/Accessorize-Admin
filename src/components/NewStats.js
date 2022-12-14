import { GiProgression } from 'react-icons/gi';
import '../componentStyles/stats.css';
const NewStats = ({ text, quantity }) => {
    return (
        <div className='users new-users'>
            <h3>{text}</h3>
            <div className='chart-container'>
                <GiProgression />
                <span>{quantity}</span>
            </div>
        </div>
    );
}

export default NewStats;