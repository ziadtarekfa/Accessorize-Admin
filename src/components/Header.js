import { ReactComponent as Mirror } from '../assets/mirror.svg';
import { ReactComponent as Male } from '../assets/male.svg';
import '../componentStyles/header.css';
const Header = () => {
    return (
        <header>
            <div className='mirror-container'>
                <Mirror fill='white' />
                <h2>Accessorize</h2>
            </div>
            <div className='male-container'>
                <Male fill='black' />
            </div>

        </header>);
}

export default Header;