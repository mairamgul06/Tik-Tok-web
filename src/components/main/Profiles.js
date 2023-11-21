import React, { useState } from 'react'
import './Profiles.css'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import share from './share.png';
import CodeIcon from '@mui/icons-material/Code';
import facebook from './facebook.png';
import whatsapp from './whatsapp.png';
import link from './link.png';
import twitter from './twitter.png'
import MediaBlog from './MediaBlog';
export default function Profiles() {

    const [send, setSend] = useState(false);

    return (
        <div className='Profile'>
            <div className='profile-flex'>
                <img className="profimg" src={localStorage.getItem("profilePic")} alt="" />
                <div className='flex'>
                    <h1 className='profile-title'>{localStorage.getItem("name")}</h1>
                    <h3 className='profile-subtitle'>{localStorage.getItem("email")}</h3>
                    <button className='prof-btn' ><DriveFileRenameOutlineIcon />Изменить профиль</button>
                </div>
            </div>
            <div className='position' onClick={() => setSend(!send)}>
                <img style={{ width: '24px', height: '24px' }} src={share} alt="share" />
            </div>
            <div className='blog-count'>
                <div className='profile-counts'>
                    <p className='count'>0</p>
                    <span className='cout-text'>Подписки</span>
                </div>
                <div className='profile-counts'>
                    <p className='count'>0</p>
                    <span className='cout-text'>Подписчики</span>
                </div>
                <div className='profile-counts'>
                    <p className='count'>0</p>
                    <span className='cout-text'>Лайки</span>
                </div>
            </div>
            <MediaBlog/>

            {send && (
                <div className='send-menu'>
                    <div className='tab-send'>
                        <div className='but'><CodeIcon /></div>
                        <p className='send-title'>Вставка</p>
                    </div>
                    <div className='tab-send'>
                        <img className="send-img" src={whatsapp} alt="" />
                        <p className='send-title'>Share to Whatsapp</p>
                    </div>
                    <div className='tab-send'>
                        <img className="send-img" src={facebook} alt="" />
                        <p className='send-title'>Share to Facebook</p>
                    </div>
                    <div className='tab-send'>
                        <img className="send-img" src={twitter} alt="" />
                        <p className='send-title'>Share to Twitter</p>
                    </div>
                    <div className='tab-send'>
                        <img className="send-img" src={link} alt="" />
                        <p className='send-title'>Копировать ссылку</p>
                    </div>
                </div>
            )}

        </div>
    )
}


