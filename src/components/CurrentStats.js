import '../componentStyles/stats.css';
import { BsBarChartLineFill } from 'react-icons/bs';

const CurrentStats = ({ text, quantity }) => {
    return (
        <div className='users current-users'>
            <h3>{text}</h3>
            <div className='chart-container'>
                <BsBarChartLineFill size='40px' />
                <span>{quantity}</span>
            </div>
        </div>
    );
}

export default CurrentStats;