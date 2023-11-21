import React from 'react'
import './Broad.css'
import GroupIcon from '@mui/icons-material/Group';

export default function Broad() {
    return (
        <div className='Broad'>
            <div className='broad-wrapper'>
                <div className='broad-position'>
                    <div className='broad-first-bar'>
                        <button style={{ background: 'crimson', color: '#fff', fontSize: 15, border: 'none', borderRadius: '2px' }}>LIVE</button>
                    </div>
                    <div className='broad-bar'>
                        <h5 style={{ color: '#fff' }}>Hello</h5>
                        <h4 style={{ color: '#fff' }}>hello bro</h4>
                        <GroupIcon sx={{ fontSize: 20, color: '#fff' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
