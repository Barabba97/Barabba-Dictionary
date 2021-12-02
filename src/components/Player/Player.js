import React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import './Player.css';

const Player = ({ meanings }) => {

    function playAudio() {
        let audio = new Audio(meanings[0].phonetics[0].audio);
        audio.play();
      }

    return (
        <div>
            {
                <VolumeUpIcon className="player" onClick={ () => { 
                    playAudio();
                    }} 
                />
            }
        </div>
    );
};

export default Player;