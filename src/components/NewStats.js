import { GiProgression } from 'react-icons/gi';
import '../componentStyles/stats.css';
const NewStats = () => {
    return (
        <div className='users new-users'>
            <h3>New Users</h3>
            <div className='chart-container'>
                <GiProgression />
                <span>20</span>
            </div>
        </div>
    );
}

export default NewStats;