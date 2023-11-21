import React, { useState } from 'react';
import './DropWorld.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import AssistantIcon from '@mui/icons-material/Assistant';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function DropWorld() {
    const [down, setDown] = useState(1);
    const action = (index) => {
        setDown(index);
    };
    return (
        <div>
            <div className="menu-message">
                <div className="menu-wrap">
                    <h1 className="menu-title">Уведомление</h1>
                    <button onClick={() => action(1)} className={`${down === 1 ? 'tab__button-active' : 'tab__button'}`}>Вся активность</button>
                    <button onClick={() => action(2)} className={`${down === 2 ? 'tab__button-active' : 'tab__button'}`}> Лайки</button>
                    <button onClick={() => action(3)} className={`${down === 3 ? 'tab__button-active' : 'tab__button'}`}>Комментарии</button>
                    <button onClick={() => action(4)} className={`${down === 4 ? 'tab__button-active' : 'tab__button'}`}>Упоминание и отметки</button>
                    <button onClick={() => action(5)} className={`${down === 5 ? 'tab__button-active' : 'tab__button'}`}>Подписчики</button>
                </div>
                <div className={`${down === 1 ? 'tab__blogs-active' : 'tab__blogs'}`}>
                    <AssistantIcon sx={{ fontSize: 50, color: '#e5dfdf' }} />
                    <h1 className="blogs-title">Вся активность</h1>
                    <p className="blogs-subtitle">Здесь появятся уведомления о вашем аккаунте.</p>
                </div>
                <div className={`${down === 2 ? 'tab__blogs-active' : 'tab__blogs'}`}>
                    <FavoriteBorderIcon sx={{ fontSize: 50, color: '#e5dfdf' }} />
                    <h1 className="blogs-title">Лайки на ваших видео</h1>
                    <p className="blogs-subtitle">Здесь можно увидеть лайки на ваших видео</p>
                </div>
                <div className={`${down === 3 ? 'tab__blogs-active' : 'tab__blogs'}`}>
                    <MapsUgcRoundedIcon sx={{ fontSize: 50, color: '#e5dfdf' }} />
                    <h1 className="blogs-title">Комментарии на ваших видео </h1>
                    <p className="blogs-subtitle">Здесь можно увидеть комментарии на ваши видео.</p>
                </div>
                <div className={`${down === 4 ? 'tab__blogs-active' : 'tab__blogs'}`}>
                    < AlternateEmailRoundedIcon sx={{ fontSize: 50, color: '#e5dfdf' }} />
                    <h1 className="blogs-title">Упоминание о вашем аккаунте.</h1>
                    <p className="blogs-subtitle">Здесь появятся упоминание о вашем аккаунте.</p>
                </div>
                <div className={`${down === 5 ? 'tab__blogs-active' : 'tab__blogs'}`}>
                    <PersonOutlineIcon sx={{ fontSize: 50, color: '#e5dfdf' }} />
                    <h1 className="blogs-title">Подписчики на ваш аккаунт</h1>
                    <p className="blogs-subtitle">Здесь появятся ваши подписчики.</p>
                </div>

            </div>
        </div>
    )
}
