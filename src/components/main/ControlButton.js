import React from 'react'
import './Home.css';
import {  Pause } from '@mui/icons-material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
export default function ControlButton({toggleMuted, togglePlay, isPlaying, isMuted}) {
    return (
        <>
            <button className='video-btn' onClick={togglePlay}>
                {isPlaying ?
                    <Pause sx={{ color: '#fff' }} />
                    :
                    <PlayArrowRoundedIcon sx={{ color: '#fff', fontSize: 28 }} />
                }
            </button>
            <button className='video-btn' onClick={toggleMuted}>
                {isMuted ?
                    <VolumeOffRoundedIcon sx={{ color: '#fff' }} />
                    :
                    <VolumeUpRoundedIcon sx={{ color: '#fff' }} />
                }
            </button>
        </>
    )
}
