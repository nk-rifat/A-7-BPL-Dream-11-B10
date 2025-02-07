import PropTypes from 'prop-types';
import './Cricketer.css' ;
import { IoFlagOutline } from "react-icons/io5";

const Cricketer = ({ cricketer, handleChosePlayer }) => {
    const { img, profile_img, name, country, speciality, batting_style, bowling_style, price_usd, rating } = cricketer;
    return (
        <div>
            <div className='container'>
                <img className='h-[240px] w-full rounded-2xl' src={img} alt="" />

                <div className='flex items-center space-x-2 mt-6'>
                    <img className='rounded-full w-9 h-9' src={profile_img} alt="" />
                    <h3 className='text-[20px] font-semibold'>{name}</h3>
                </div>

                <div className='flex justify-between items-center mt-6 mb-4'>
                    <p className='text-base font-normal flex items-center'><IoFlagOutline className='text-green-700'></IoFlagOutline>{country}</p>
                    <p className='text-[14px] font-normal py-2 px-4 rounded-lg bg-gray-200'>{speciality}</p>
                </div>
                <hr />

                <div className='flex justify-between mt-6'>
                    <p className='text-black text-base font-bold'>Rating</p>
                    <p>{rating}</p>
                </div>

                <div className='flex justify-between mt-3'>
                    <p className='text-black text-base font-semibold'>{batting_style}</p>
                    <p>{bowling_style}</p>
                </div>

                <div className='flex justify-between mt-3'>
                    <p className='text-black text-base font-semibold'>Price: {price_usd}</p>
                    <button onClick={() => handleChosePlayer(cricketer)} className='chose-player-btn btn-primary'>Chose Player</button>
                </div>
            </div>

        </div>
    );
};

Cricketer.propTypes = {
    cricketer: PropTypes.object.isRequired,
    handleChosePlayer: PropTypes.func
}

export default Cricketer;