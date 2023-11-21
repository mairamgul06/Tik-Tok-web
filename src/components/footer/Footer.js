import React from 'react';
import './Footer.css'
import png from './tiktok.png'
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <div className="Footer">
            <div className="footer__all">
                <div className="footer__flex">
                    <img className="footer__img" src={png} alt="" />
                    <h1>TikTok</h1>
                </div>
                <ul className="footer-menu">
                    <li className='footer-menu-link'>Компания</li>
                    <li className='footer-link'><a href="https://www.tiktok.com/about?lang=ru-RU">Информация</a></li>
                    <li className='footer-link'><a href="https://newsroom.tiktok.com/ru-ru/">Новости</a></li>
                    <Link to={'contact'} className='footer-link'>Контакт</Link>
                    <li className='footer-link'><a href="https://careers.tiktok.com/">Род занятий</a></li>
                    <li className='footer-link'><a href="https://www.bytedance.com/">ByteDance</a></li>
                </ul>
                <ul className="footer-menu">
                    <li className='footer-menu-link'>Программы</li>
                    <li className='footer-link'><a href='https://www.tiktok.com/forgood?lang=ru' className='footer-link'>TikTok for Good</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/business/en?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web&tt4b_lang_redirect=1">Реклама</a></li>
                    <li className='footer-link'><a href="https://developers.tiktok.com/?refer=tiktok_web">Developers</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/tiktok-rewards/eligibility/">TikTok Rewards</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/embed">TikTok Embeds</a></li>
                </ul>
                <ul className="footer-menu">
                    <li className='footer-menu-link'>Поддержка</li>
                    <li className='footer-link'><a href="https://support.tiktok.com/ru">Центр поддержки</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/safety/ru-ru/">Центр безопасности</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/creators/creator-portal/en-us/">Creator Portal</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/community-guidelines/ru-ru/">Правила сообщества</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/transparency/en">Прозрачность</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/accessibility/">Accessibility</a></li>
                </ul>
                <ul className="footer-menu">
                    <li className='footer-menu-link'>Юридические документы</li>
                    <li className='footer-link'><a href="https://www.tiktok.com/legal/page/row/terms-of-service/ru-RU">Terms of Use</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/legal/page/row/privacy-policy/ru-RU">Privacy Policy</a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/legal/page/global/copyright-policy/ru-RU">Политика в отношении <br /> интеллектуальной собственности </a></li>
                    <li className='footer-link'><a href="https://www.tiktok.com/legal/page/global/law-enforcement/ru-RU">Руководство TikTok по вопросам <br /> взаимодействия с <br /> правоохранительными органами</a></li>
                </ul>
            </div>
            <div className="footer__all footer__all-last">
                <div>
                    <select className="footer__select">
                        <option selected="" value="ru-RU">Русский (Россия)</option>
                        <option value="ar">العربية</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="tr-TR">Türkçe (Türkiye)</option>
                    </select>
                </div>
                <div>© 2023 TikTok</div>
            </div>
        </div>
    );
}

export default Footer;