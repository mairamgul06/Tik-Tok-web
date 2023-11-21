import React from 'react'
import './Follow.css';
import { Avatar } from '@mui/material';
import vidos from './vidos.mp4'
import video from './video.mp4'
import firstVideo from './video-1.mp4'
import secondVideo from './video-2.mp4'
export default function Follow() {
    return (
        <div className='Follow'>
            <div className='follow-wrapper'>
                <div className='follow-pages'>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay={1} muted loop src={vidos}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay={2} muted loop src={video}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div className='follow-pages'>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={vidos}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                </div>
                <div className='follow-pages'>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={video}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                    <div className='follow-blog'>
                        <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
                        <div className='follow-position'>
                            <Avatar />
                            <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                            <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                            <button className='follow-btn'>Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
