import logo from '../../assets/logo.png';
import bannerMain from '../../assets/banner-main.png';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({coin, handleFreeCredit}) => {
   
    return (
        <div>
            {/* Nav bar Section */}
            <nav className='flex justify-between items-center mx-36 my-12 bg-gray-50 rounded-2xl'>
                <img src={logo} alt="" />
                <ul className='flex items-center space-x-12'>
                    <li className='nav'>Home</li>
                    <li className='nav'>Fixture</li>
                    <li className='nav'>Teams</li>
                    <li className='nav'>Schedules</li>
                    <li className='coin'><span >{coin}</span> Coins</li>
                </ul>
            </nav>
            {/* Banner Section */}
            <section className='mx-36 my-4'>
                <div className='bg backdrop-brightness-8'>
                <img src={bannerMain} alt="" />
                <h1 className='text-white text-[40px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400 text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className='btn mt-6'>Claim Free Credit</button>
                </div>
            </section>
        </div>
    );
};

Header.propTypes = {
    coin: PropTypes.number.isRequired,
    handleFreeCredit: PropTypes.func.isRequired
    
}

export default Header;