import React from 'react';
import './HelpOther.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
export default function HelpOther() {
  const [change, setChange] = useState(false);
  const [click, setClick] = useState(false);
  const [clone, setClone] = useState(false);
  const [come, setCome] = useState(false);
  return (
    <div className='Help'>
      <div className="help-container">
        <div className='help-first-texts'>
          <h1 className="help-title">    Обратная связь и помощь  </h1>
          <h4 className='help-subtitle'>ВЫБЕРИТЕ ТЕМУ</h4>
        </div>
        <div className='help-flex'>
          <div className='help-direction'>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Предложение</span></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Мой аккаунт и настройки</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Инструменты автора</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Лента/Поиск/Поделиться/вставить</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Видео и звук</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Подписки/лайки/комментарии</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Уведомления/сообщения</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Трансляции</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Жалоба на нарушение правил</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Баланс TikTok</span><ArrowForwardIosIcon sx={{ fontSize: 10 }} /></div>
            <div className='help-direction-title'><span className='help-direction-subtitle'>Приложение не отвечает/медленно работает/другое</span></div>
          </div>
          <div className='help-second-texts'>
            <div className='help-second-title'>ЧАСТЫЕ ВОПРОСЫ</div>
            <div className='help-second-direction'>
              <Accordion sx={{ boxShadow: 'none', border: 'none', background: 'inherit' }}>
                <AccordionSummary id='panel1' aria-controls='panel1-content' expandIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, transform: 'rotate(90deg)' }} />}>
                  <Typography sx={{ fontWeight: 500 }}>Как войти?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Чтобы войти в аккаунт: <br />

                    В веб-версии TikTok для компьютера: <br />
                    1. Кликните на значок «Войти» в правом верхнем  углу <br />
                    2. Выберите метод входа <br />
                    3. Введите данные своего аккаунта или продолжите работу с выбранным методом входа <br />

                    В веб-версии TikTok для мобильных устройств: <br />
                    1. Нажмите «Я», чтобы перейти в профиль <br />
                    2. Нажмите «Регистрация» <br />
                    3. Нажмите «Вход» внизу страницы <br />
                    4. Выберите метод входа <br />
                    5. Введите данные своего аккаунта или продолжите работу с выбранным методом входа </Typography>
                    <div className='help-blog-ask'>
                      <p className='help-ask-title'> Проблема решена?</p>
                      <div className='help-blog-buttons'>
                      <button className='help-blog-btn' onClick={()=>{setChange(!change)}}>да</button>
                      <button className='help-blog-btn' onClick={()=>{setChange(!change)}}>нет</button>
                      </div>
                      { change && (
                        <div className='help-title-text'>Спасибо за ваш отзыв</div>
                      )}
                    </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ boxShadow: 'none', border: 'none', background: 'inherit' }}>
                <AccordionSummary id='panel2' aria-controls='panel1-content' expandIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, transform: 'rotate(90deg)' }} />}>
                  <Typography sx={{ fontWeight: 500 }}>Этот номер телефона уже зарегистрирован?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    К каждому номеру телефона можно привязать только один аккаунт TikTok. Чтобы <br />привязать свой номер к новому аккаунту, измените номер <br /> телефона, указанный в текущем аккаунте, или удалите этот аккаунт. <br />

                    Удаленный аккаунт будет деактивирован на 30 дней, а затем стерт окончательно. <br /> После этого номер телефона можно будет привязать к новому аккаунту. br


                    Чтобы узнать, какой аккаунт сейчас привязан к вашему номеру телефона: <br />
                    В веб-версии TikTok для компьютера: <br />
                    1. Нажмите на значок входа <br />
                    2. Выберите «Введите телефон / почту / имя пользователя» <br />
                    3. Введите номер телефона для входа <br />
                    <br />
                    В приложении TikTok: <br />
                    1. Нажмите «Войти» в нижней части страницы <br />
                    2. Выберите «Введите телефон / почту / имя пользователя» <br />
                    3. Введите номер телефона для входа <br />
                    <br />
                    Если ваш номер телефона привязан к другому аккаунту: <br />
                    В веб-версии TikTok для компьютера: <br />
                    1. Выйдите из аккаунта и нажмите «Войти» вверху страницы <br />
                    2. Нажмите «Регистрация» <br />
                    3. Нажмите «Ввести телефон или эл. почту» <br />
                    4. Введите дату рождения и номер телефона <br />
                    5. Введите отправленный на устройство код <br />
                    6. Вы увидите фото профиля связанного с этим номером аккаунта. Если это ваш аккаунт, нажмите «Войти другим способом» <br />
                    7. Если это не ваш аккаунт, нажмите «Продолжить с этим номером» <br />

                    В приложении TikTok: <br />
                    1. Выйдите из аккаунта и нажмите «Ввести телефон или эл. почту» на экране входа <br />
                    2. Введите дату рождения и номер телефона <br />
                    3. Нажмите «Отправить код» <br />
                    4. Введите отправленный на устройство код <br />
                    5. Вы увидите фото профиля связанного с этим номером аккаунта. Если это ваш аккаунт, нажмите «Войти другим способом» <br />
                    6. Если это не ваш аккаунт, нажмите «Продолжить с этим номером» <br />
                    <br />
                    Мы удалим номер телефона из другого аккаунта и свяжем его с новым. На <br /> предыдущий аккаунт придет уведомление о том, что  <br />с этим номером телефона была создана новая учетная запись.
                  </Typography>
                  <div className='help-blog-ask'>
                      <p className='help-ask-title'> Проблема решена?</p>
                      <div className='help-blog-buttons'>
                      <button className='help-blog-btn' onClick = {()=>{setClick(!click)}} >да</button>
                      <button className='help-blog-btn' onClick = {()=>{setClick(!click)}} >нет</button>
                      </div>
                      { click && (
                        <div className='help-title-text'>Спасибо за ваш отзыв</div>
                      )}
                    </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ boxShadow: 'none', border: 'none', background: 'inherit' }}>
                <AccordionSummary id='panel3' aria-controls='panel1-content' expandIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, transform: 'rotate(90deg)' }} />}>
                  <Typography sx={{ fontWeight: 500 }}>Почему у меня не прошла оплата?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Если вы можете приобретать монеты, но транзакция не прошла, проверьте, выполнены ли следующие условия: <br />
                    1. Вы привязали к аккаунту банковский счет и на нем есть средства. <br />
                    2. На вашем банковском счете нет ограничений или лимитов на транзакции. <br />
                    3. Проверьте правильность ввода данных (например, имени владельца карты, электронного или почтового адреса и т. д.). <br />
                    4. Попробуйте уменьшить сумму, не совершать множество транзакций за короткое время и не использовать несколько разных карт одновременно. <br />
 <br />
                    Если приобрести Монеты все равно не удается, нажмите на кнопку «Все еще нужна помощь» ниже, опишите проблему и приложите скриншоты ошибки. <br />
                  </Typography>
                  <div className='help-blog-ask'>
                      <p className='help-ask-title'> Проблема решена?</p>
                      <div className='help-blog-buttons'>
                      <button className='help-blog-btn' onClick = {()=>{setCome(!come)}} >да</button>
                      <button className='help-blog-btn' onClick = {()=>{setCome(!come)}} >нет</button>
                      </div>
                      { come && (
                        <div className='help-title-text'>Спасибо за ваш отзыв</div>
                      )}
                    </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ boxShadow: 'none', border: 'none', background: 'inherit' }}>
                <AccordionSummary id='panel4' aria-controls='panel1-content' expandIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, transform: 'rotate(90deg)' }} />}>
                  <Typography sx={{ fontWeight: 500 }}>Почему монеты на поступили на мой счет после оплаты?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Как правило, обработка транзакций занимает несколько минут. Попробуйте обновить веб-страницу или подождите еще немного. Возможно, проблема решится сама по себе. <br />
 <br />
                    Если купленные монеты так и не поступили на счет, нажмите на кнопку «Все еще нужна помощь» ниже, опишите проблему и прикрепите полные скриншоты своей истории покупок и раздела «Баланс». <br />
                    Как найти эти разделы: <br />
                    1. Нажмите на свое фото профиля на сайте tiktok.com, а затем выберите «Приобрести Монеты». Здесь можно увидеть ваш баланс. <br />
                    2. Нажмите на свое фото профиля на сайте tiktok.com, а затем выберите «Приобрести Монеты». Затем нажмите «См. историю транзакций», чтобы просмотреть список заказов и связанные с ними инвойсы. <br />
 <br />
                    На скриншоте должны присутствовать баланс монет, а также сведения о транзакции: номер заказа, сумма платежа и время оплаты. <br />
                  </Typography>
                  <div className='help-blog-ask'>
                      <p className='help-ask-title'> Проблема решена?</p>
                      <div className='help-blog-buttons'>
                      <button className='help-blog-btn' onClick = {()=>{setClone(!clone)}} >да</button>
                      <button className='help-blog-btn' onClick = {()=>{setClone(!clone)}} >нет</button>
                      </div>
                      { clone && (
                        <div className='help-title-text'>Спасибо за ваш отзыв</div>
                      )}
                    </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='help-last-text'>Сообщить о проблеме</div>
      </div>
      <div className='help-last-content'>
        <h1 className='help-footer-title'>Скачать сейчас</h1>
        <div className='help-button-content'>
          <button className='help-button'><QrCodeIcon sx={{ color: '#fff', fontSize: 30 }} /><span className='help-qr-text'>QR CODE</span></button>
          <img className='help-image' src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png" alt="" />
          <button className='help-button'></button>
          <button className='help-button'></button>
          <button className='help-button'></button>
        </div>
      </div>
    </div>
  )
}
