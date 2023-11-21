import React, { useState } from 'react';
import './Home.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import notInterestedIcon from './notInterestedIcon.svg';
import flagIcon from './flagIcon.svg';
import musicIcon from '../main/musicIcon.png';
import UploadStorage from './UploadStorage';
import VideoControls from './VideoControls';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUp from '../SignUp/SignUp';
import Followers from './Followers';
import VideoMedia from './VideoMedia';
import ControlButton from './ControlButton';
export default function Home() {
  const [user] = useAuthState(auth);
  const [login, setLogin] = useState(false);
  const { video } = UploadStorage()
  const [qua, setQua] = useState(false);
  const { videoRef, toggleMuted, togglePlay, setIsPlaying, isPlaying, isMuted, setIsMuted } = VideoControls();
  return (
    <div className='Home'>
      {video.map((URL) => {
        return <div className='home-wrap'>
          <div className='home-bar'>
            {login && (
              <SignUp closeModal={setLogin} />
            )}
            {user ?
              <div className='home-fled'>
                <div className='flex-item'>
                  <img className="home-img" src={localStorage.getItem("profilePic")} alt="" />
                </div>
                <div className='flex-direction'>
                  <div className='home-flex-item'>
                    <h1 className='title'>{localStorage.getItem("name")}</h1>
                    <h1 className='subtitle'>{localStorage.getItem("name")}</h1>
                  </div>
                  <div className='ml'>
                    waaaaa
                  </div>
                  <div className='home-flex'>
                    <img className='musicIcon' src={musicIcon} alt="" />
                      <span className='subtitle-sound'>Orginal sound -</span>
                      <h1 className='subtitle-sound'>{localStorage.getItem("name")}</h1>
                  </div>
                </div>
              </div>
              :
              <div className='home-fled'>
                <div className='flex-item'>
                  <img className="home-img" src={localStorage.getItem("profilePic")} alt="" />
                </div>
                <div className='flex-direction'>
                  <div className='home-flex-item'>

                    <h1 className='title'>{localStorage.getItem("name")}</h1>
                    <h1 className='subtitle'>{localStorage.getItem("name")}</h1>

                  </div>
                  <div className='ml'>
                    waaaaa
                  </div>
                  <div className='home-flex'>
                    <img className='musicIcon' src={musicIcon} alt="" />
                    <span>Orginal sound</span>
                  </div>
                </div>
              </div>
            }
            <Followers />
          </div>
          <div className='home-video-wrap'>
            <video className='video' ref={videoRef} src={URL} loop playsInline muted={isMuted} alt="video" />
            <div className='video-position'>
              <div className='video-dot' onClick={() => setQua(!qua)}>
                < MoreHorizIcon sx={{ color: '#fff' }} />
              </div>
              <div className="video-controls">
                <ControlButton toggleMuted={toggleMuted} togglePlay={togglePlay} isMuted={isMuted} isPlaying={isPlaying} />
              </div>
              {qua && (
                <div className='home-qua'>
                  <div className='home-right'>
                    <img src={notInterestedIcon} alt="home" />
                    <p className='home-qua-text'>Не интересует</p>
                  </div>
                  <div className='home-right'>
                    <img src={flagIcon} alt="home" />
                    <p className='home-qua-text'>Жаловаться</p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <VideoMedia />
            </div>
          </div>

        </div>

      })}
    </div >
  )
}


