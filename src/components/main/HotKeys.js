import React from 'react';
import './HotKeys.css';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import ModeStandbyRoundedIcon from '@mui/icons-material/ModeStandbyRounded';
import ClearIcon from '@mui/icons-material/Clear';

export default function HotKeys({closeModal}) {
    return (
        <div className='hotkey'>
            <div className="key-wrap">
            <div className='hotkey-column'>
            <div onClick={() => closeModal(false)} className="key-clear"><ClearIcon sx={{fontSize:22}}/></div>
                    <h2 className='hotkey-title'>Горячие клавиши</h2>
                <div className="hotkey-flex">
                    <div className='hotkey-page'><span>пред.видео</span><ArrowCircleUpRoundedIcon /></div>
                    <div className='hotkey-page'><span>след.видео</span><ArrowCircleDownRoundedIcon /></div>
                    <div className='hotkey-page'><span>оценить видео</span><CopyrightRoundedIcon /></div>
                    <div className='hotkey-page'><span>вкл./выкл.звук</span>< ModeStandbyRoundedIcon /></div>

                </div>
            </div>
        </div>
        </div>
    )
}
