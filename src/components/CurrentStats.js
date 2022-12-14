import { BsBarChartLineFill } from 'react-icons/bs';
import '../componentStyles/stats.css';
const CurrentStats = ({ text, quantity }) => {
    return (
        <div className='users current-users'>
            <h3>{text}</h3>
            <div className='chart-container'>
                <BsBarChartLineFill />
                <span>{quantity}</span>
            </div>
        </div>
    );
}

export default CurrentStats;