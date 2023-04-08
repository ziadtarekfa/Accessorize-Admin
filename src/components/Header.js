import '../componentStyles/header.css';
import { ReactComponent as Mirror } from '../assets/mirror.svg';
const Header = () => {
    return (
        <header>
            <div className='mirror-container'>
                <Mirror fill='white' size='20px' />
                <h2>Accessorize</h2>
            </div>

        </header>
    );
}

export default Header;