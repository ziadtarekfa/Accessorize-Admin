import { BsBarChartLineFill } from 'react-icons/bs';
import '../componentStyles/stats.css';
const CurrentStats = () => {
    return (
        <div className='users current-users'>
            <h3>Current Users</h3>
            <div className='chart-container'>
                <BsBarChartLineFill />
                <span>7</span>
            </div>
        </div>
    );
}

export default CurrentStats;