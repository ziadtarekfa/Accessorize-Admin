import '../componentStyles/header.css';
import { ReactComponent as Mirror } from '../assets/mirror.svg';
const Header = () => {
    return (
        <header>
            <div className='mirror-container'>
                <Mirror fill='white' size='20px' />
                <h2>Accessorize</h2>
            </div>
            {/* name initials */}
            <h1>ZT</h1>

        </header>
    );
}

export default Header;