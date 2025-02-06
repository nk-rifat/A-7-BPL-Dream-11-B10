import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
import './Selected.css';

const Selected = ({ player, handleRemovePlayer}) => {
    const { name, profile_img, speciality } = player;
   
    return (
        <div className='selected-container flex justify-between items-center mt-4'>
            <div className='flex items-center space-x-3'>
                <img className='rounded-full w-12 h-12' src={profile_img} alt="" />
                <div className=''>
                    <h1 className='text-[20px] font-semibold'>{name}</h1>
                    <p>{speciality}</p>
                </div>
            </div>
            <button onClick={() => handleRemovePlayer(player)} className='text-2xl text-red-500'><MdDeleteForever></MdDeleteForever></button>
        </div>
    );
};

Selected.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemovePlayer : PropTypes.func.isRequired
}

export default Selected;