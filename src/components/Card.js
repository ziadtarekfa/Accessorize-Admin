import '../componentStyles/card.css';
const Card = ({ text, quantity, svgIcon, color }) => {
    return (
        <div className='card' style={{ 'backgroundColor': `${color}` }}>
            <h3>{text}</h3>
            <div className='chart-container'>
                <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                <span >{quantity}</span>
            </div>
        </div>
    );
}

export default Card;