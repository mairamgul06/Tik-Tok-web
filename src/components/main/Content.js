import React, { useState } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import SignUp from '../SignUp/SignUp'
import '../Browser.css'
export default function Content() {
    const [user] = useAuthState(auth);
    const [login, setLogin] = useState(false);
    const [qua, setQua] = useState(false)
    return (
        <div className='Content'>
            {user ?
                <div className='content-first-type'>
                    <p className='content-first-title'>
                        Подписки на аккаунты
                    </p>
                    <p className='content-subtitle'>
                        Здесь появятся аккаунты, на которые вы подписаны
                    </p>
                </div>
                :
                <div className='content-second-type'>
                    <p className='content-title'>Войдите, чтобы <br /> подписываться на авторов, <br /> ставить лайки видео и <br /> читать комментарии.</p>
                    <button onClick={() => { setLogin(!login) }} className='content-btn'>Войти</button>
                </div>
            }


            <div className='content-type'>

                <div className='content-link'><a href="https://www.tiktok.com/about?lang=ru-RU">Информация</a><a href="https://newsroom.tiktok.com/ru-ru/">Новости</a><Link to={'contact'}>Контакт </Link></div>
                <div className='content-link'><a href="https://careers.tiktok.com/"> Род занятий</a><a href="https://www.bytedance.com/">ByteDance </a></div>
                <div className='content-link'><a href="https://www.tiktok.com/forgood">TikTok for Good </a> <a href="https://www.tiktok.com/business/en?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1">Реклама</a></div>
                <div className='content-link'> <a href="https://developers.tiktok.com/?refer=tiktok_web">Developers </a><a href="https://www.tiktok.com/transparency/en/">Прозрачность</a></div>
                <div className='content-link'> <a href="https://www.tiktok.com/tiktok-rewards/eligibility/">TikTok Rewards</a> <a href="https://www.tiktok.com/embed">TikTok Embeds</a></div>
                <div className='content-link'> <a href="https://support.tiktok.com/ru">Помощь</a> <a href="https://www.tiktok.com/safety/ru-ru/">Безопасность</a> <a href="https://www.tiktok.com/legal/page/row/terms-of-service/ru-RU">Условия</a></div>
                <div className='content-link'><a href="https://www.tiktok.com/legal/page/row/privacy-policy/ru-RU"> Конфиденциальность</a></div>
                <div className='content-link'><a href="https://www.tiktok.com/creators/creator-portal/en-us/"> Портал для авторов</a></div>
                <div className='content-link'><a href="https://www.tiktok.com/community-guidelines/ru-ru/"> Правила сообщества</a></div>
                <div className='content-link'><a href="https://www.tiktok.com/legal/page/global/copyright-policy/ru-RU">Авторское право</a></div> <br />
                <p onClick={()=> setQua(!qua)}>Ещё</p> <br /><p>© 2023 TikTok</p>
            </div>

            {login && (
                <SignUp closeModal={setLogin} />
            )}
            {qua && (
                <div className='content-qua'>
                <p className='content-li'><a href="https://www.tiktok.com/legal/page/global/copyright-policy/ru-RU">Политика в отношении интелектуальной собственности</a></p>
                <p className='content-li'><a href="https://www.tiktok.com/legal/page/global/law-enforcement/ru-RU">Руководство TikTok по вопросом взаимадействия и провоохранительными оршанами</a></p>
            </div>
            )}
        </div>
    )
}