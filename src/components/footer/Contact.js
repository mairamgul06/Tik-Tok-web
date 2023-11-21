import React from 'react'
import './Contact.css';
import imagesFirst from './contact-image-1.png';
import imagesSecond from './contact-images-3.png';
import imagesThird from './contact-images-2.png';
import imagesFourth from './contact-images-4.png';
export default function Contact() {
    return (
        <div className='Contact'>
            <div className="contact-flex">
                <h1 className="contact-title">Контакты</h1>
                <div className='contact-wrapper'>
                    <div className="contact-blog">
                        <div className='contact-page-text'>В центр поддержки</div>
                        <a href=" https://support.tiktok.com/ru" className='contact-link'><p className='conatct-content-text'>support.tiktok.com</p></a>
                    </div>
                    <div className="contact-content">
                        <div className='contact-page'>
                            <img className='contact-images' src={imagesFirst} alt='contact' />
                            <div className='contact-display'>
                                <div className='contact-page-text'>Партнеры</div>
                                <a href='https://www.tiktok.com/business/en?tt4b_lang_redirect=1' className='contact-link'> <p className='conatct-content-text'>Реклама в TikTok</p></a>
                            </div>
                        </div>
                        <div className='contact-page'>
                            <img className='contact-images' src={imagesSecond} alt='contact' />
                            <div className='contact-display'>
                                <div className='contact-page-text'>Для запросов СМИ</div>
                                <a href="https://newsroom.tiktok.com/ru-ru/" className='contact-link'> <p className='conatct-content-text'>newsroom.tiktok.com</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-content">
                        <div className='contact-page'>
                            <img className='contact-images' src={imagesThird} alt='contact' />
                            <div className='contact-display'>
                                <div className='contact-page-text'>Юридические запросы</div>
                                <a href=' https://www.tiktok.com/legal/page/global/law-enforcement/ru-RU' className='contact-link'> <p className='conatct-content-text'>Сведения для правоохранительных <br />органов Интеллектуальная <br /> собственность</p></a>
                            </div>
                        </div>
                        <div className='contact-page'>
                            <img className='contact-images' src={imagesFourth} alt='contact' />
                            <div className='contact-display'>
                                <div className='contact-page-text'>Конфиденциальность</div>
                                <a href="https://www.tiktok.com/legal/page/row/privacy-policy/ru-RU" className='contact-link'> <p className='conatct-content-text'>Узнать больше</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
