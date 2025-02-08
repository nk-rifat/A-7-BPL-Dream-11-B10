import { useEffect, useState } from "react";
import Cricketer from "../Cricketer/Cricketer";
import './Cricketers.css';
import Selected from "../SelectedPlayer/Selected";
import PropTypes from 'prop-types';


const Cricketers = ({ chosePlayer, handleChosePlayer, handleRemovePlayer }) => {
    const [cricketers, setCricketers] = useState([]);
    const [visibleContent, setVisibleContent] = useState('content1'); // hide and show content with button

    // fetch the all cricketers fake data 
    useEffect(() => {
        fetch('cricketers.json')
            .then(res => res.json())
            .then(data => setCricketers(data));
    }, []);

    return (
        <div className="mx-36 my-12">
            <div className="flex justify-end">
                <div className="flex space-x-3">
                    <button onClick={() => setVisibleContent("content1")} className="btnAS">Available</button> 
                    <button onClick={() => setVisibleContent("content2")} className="btnAS">Selected {chosePlayer.length}</button>
                </div>
            </div>
            {/* Show content1 with button Available*/}
            {visibleContent === 'content1' &&
                (<div>
                    <p className="available">Available Players</p>
                    <div className="container-box space-x-6 mt-12 space-y-3 mb-[100px]">
                        {
                            cricketers.map(cricketer => <Cricketer key={cricketer.id} cricketer={cricketer} handleChosePlayer={handleChosePlayer}></Cricketer>)
                        }
                    </div>
                </div>)
            }

            {/* show content2 with button selected */}
            {visibleContent === 'content2' &&
                (
                    <div>
                        <p className="available">Selected Players {chosePlayer.length} / 6</p>

                        <div className="mb-[100px]">
                            <div>
                                {
                                    chosePlayer.map(player => <Selected key={player.id} player={player} handleRemovePlayer={handleRemovePlayer}></Selected>)
                                }
                            </div>
                            <button onClick={() => setVisibleContent("content1")} className="btn mt-8">Add More Player</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

Cricketers.propTypes = {
    chosePlayer: PropTypes.array.isRequired,
    handleChosePlayer: PropTypes.func.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired

}

export default Cricketers;