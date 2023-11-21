import React, { useState } from 'react'
import './About.css';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import ParkIcon from '@mui/icons-material/Park';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import LanguageIcon from '@mui/icons-material/Language';
import MicNoneIcon from '@mui/icons-material/MicNone';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Avatar } from '@mui/material';
import secondVideo from './video-2.mp4'
import video from './video.mp4'
import firstVideo from './video-1.mp4'
export default function About() {
  const [state, setState] = useState(1);
  const action = (index) => {
    setState(index);
  };
  return (
    <div className='About'>
      <div className='about-container'>
        <div className='about-button-container'>
          <div onClick={() => action(1)} className={`${state === 1 ? 'about-button-active' : 'about-button'}`}>
            <MicNoneIcon />
            <p className="about-first-subtitle">Танцы</p>
          </div>
          <div onClick={() => action(2)} className={`${state === 2 ? 'about-button-active' : 'about-button'}`}>
            <SportsVolleyballIcon />
            <p className="about-first-subtitle">Спорт</p>
          </div>
          <div onClick={() => action(3)} className={`${state === 3 ? 'about-button-active' : 'about-button'}`}>
            <ChildCareIcon />
            <p className="about-first-subtitle">Развлечение</p>
          </div>
          <div onClick={() => action(4)} className={`${state === 4 ? 'about-button-active' : 'about-button'}`}>
            < LocalCafeIcon />
            <p className="about-first-subtitle">Быт</p>
          </div>
          <div onClick={() => action(5)} className={`${state === 5 ? 'about-button-active' : 'about-button'}`}>
            <NoCrashIcon />

            <p className="about-first-subtitle">Автомобили</p>
          </div>
          <div onClick={() => action(6)} className={`${state === 6 ? 'about-button-active' : 'about-button'}`}>
            <ParkIcon />
            <p className="about-first-subtitle">Природа</p>
          </div>
          <div onClick={() => action(7)} className={`${state === 7 ? 'about-button-active' : 'about-button'}`}>
            <VolunteerActivismIcon />
            <p className="about-first-subtitle">Отнашение</p>
          </div>
          <div onClick={() => action(8)} className={`${state === 8 ? 'about-button-active' : 'about-button'}`}>
            <TheaterComedyIcon />
            <p className="about-first-subtitle">Медия</p>
          </div>
          <div onClick={() => action(9)} className={`${state === 9 ? 'about-button-active' : 'about-button'}`}>
            <PeopleIcon />
            <p className='about-first-subtitle'>Общество</p>
          </div>
          <div onClick={() => action(10)} className={`${state === 10 ? 'about-button-active' : 'about-button'}`}>
            <LocalMallIcon />
            <p className='about-first-subtitle'>Мода</p>
          </div>
          <div onClick={() => action(11)} className={`${state === 11 ? 'about-button-active' : 'about-button'}`}>
            <LanguageIcon />
            <p className="about-first-subtitle">Информативное</p>
          </div>
        </div>
        <div className='contentbar'>
          <div className={`${state === 1 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 2 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 3 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 4 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 5 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 6 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 7 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 8 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 9 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 10 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
          <div className={`${state === 11 ? 'post-active' : 'post'}`}>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={firstVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={video}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='follow-position'>
                <Avatar />
                <h3 className="follow-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="follow-title">{localStorage.getItem('email')}</h4>
                <button className='follow-btn'>Подписаться</button>
              </div>
            </div>
            <div className="about-type">
              <video className='follow-vidos' autoPlay muted loop src={secondVideo}></video>
              <div className='about-position'>
                <Avatar />
                <h3 className="about-subtitle">{localStorage.getItem('name')}</h3>
                <h4 className="about-title">{localStorage.getItem('email')}</h4>
                <button className='about-btn'>Подписаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
