import React, { useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Switch from '@mui/material/Switch';
import CameraOutdoorRoundedIcon from '@mui/icons-material/CameraOutdoorRounded';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import './Setting.css'
export default function Setting() {
    const [state, setState] = useState(1);
    const action = (index) => {
        setState(index);
    };
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div className='Setting'>
            <button onClick={goBack} className='setting-btn-arrow'><ArrowBack /></button>
            <div className='wrap'>
                <div className='wrap-first'>
                    <div onClick={() => action(1)} className={`${state === 1 ? 'page-active' : 'page'}`}>
                        <PermIdentityIcon sx={{ paddingRight: 2 }} />
                        Управление аккаунтом
                    </div>
                    <div onClick={() => action(2)} className={`${state === 2 ? 'page-active' : 'page'}`}>
                        <LockOpenIcon sx={{ paddingRight: 2 }} />
                        Конфиденциальность
                    </div>
                    <div onClick={() => action(3)} className={`${state === 3 ? 'page-active' : 'page'}`}>
                        <NotificationsNoneIcon sx={{ paddingRight: 2 }} />
                        Push-уведомления
                    </div>
                    <div onClick={() => action(4)} className={`${state === 4 ? 'page-active' : 'page'}`}>
                        <CameraOutdoorRoundedIcon sx={{ paddingRight: 2 }} />
                        Бизнес-аккаунт
                    </div>
                </div>
                <div className='wrap-second'>
                    <div className='setting-items'>
                        <div className="item item-flex">
                            <div className="setting-right">
                                <p className='set-title'>Управление аккаунтом </p>
                                <p className='set-subtitle'>Управление аккаунтом</p>
                                <p className='setting-subtitle'>Удалить аккаунт</p>
                            </div>
                            <div className='setting-left'>
                                <p className='remove'>Удалить </p>
                            </div>
                        </div>
                        <div className="item item-flex">
                            <div className="setting-right">
                                <p className='set-title'>Конфиденциальность</p>
                                <p className='set-subtitle'>Видимость</p>
                                <p className='setting-subtitle'>Приватный аккаунт</p>
                                <p className='setting-subtitle-gap'>Только одобренные подписчики видят видео в приватном аккаунте. Это не скажется на ваших текущих подписчиках.</p>

                            </div>
                            <div className="setting-left">

                                <Switch className='setting-switch' />
                            </div>
                        </div>
                        <div className='item'>
                            <p className='set-subtitle'>Данные</p>
                            <p className='setting-subtitle'>   Загрузка ваших данных</p>
                            <p className='setting-subtitle-gap' >Получить копию ваших данных в TikTok</p>
                        </div>
                        <div className="item item-flex">
                            <div className="setting-right">
                                <p className='set-title'> Push-уведомления</p>
                                <p className='set-subtitle'> Уведомления на ПК</p>
                                <p className='setting-subtitle'> Разрешить в браузере</p>
                                <p className='setting-subtitle-gap'>   Мгновенно узнавайте о новых лайках, комментариях и видео при помощи уведомлений на компьютере. Их можно отключить в любой момент.</p>

                            </div>
                            <div className="setting-left">

                                <Switch className='setting-switch' />
                            </div>
                        </div>
                        <div className="item">
                            <p className='set-title'>Ваши настройки</p>
                            <p className='set-subtitle'> Ваши настройки автоматически синхронизируются с приложением TikTok.</p>
                            <p className='setting-subtitle'>Взаимодействия</p>
                            <p className='setting-subtitle-gap'>Лайки, комментарии, новые подписчики, упоминания и отметки</p>
                        </div>
                        <div className='item item-flex' >
                            <div className="setting-right">
                                <p className='set-title'>Бизнес-аккаунт</p>
                                <p className='set-subtitle'>Бизнес-аккаунт</p>
                                <p className='setting-subtitle-gap'>

                                    Получите доступ к маркетинговым инструментам и эксклюзивным функциям через свой бизнес-аккаунт, чтобы эффективнее контактировать с аудиторией.</p>

                            </div>
                            <div className="setting-left">
                                <Switch className='setting-switch' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
