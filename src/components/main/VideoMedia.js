import React, {useState} from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssistantIcon from '@mui/icons-material/Assistant';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CodeIcon from '@mui/icons-material/Code';
import facebook from './facebook.png';
import whatsapp from './whatsapp.png';
import link from './link.png';
import twitter from './twitter.png';
import share from './share.png';
import Comments from './Comments';
import './Home.css';
export default function VideoMedia() {
    const [login, setLogin] = useState(false);
    const [comment, setComment] = useState(false)
    const [send, setSend] = useState(false);
    const [user] = useAuthState(auth);
    const [like, setLike] = useState(0);
    const [islike, setIsLike] = useState(false);
    const [save, setSave] = useState(0);
    const [isSave, setIsSave] = useState(false)
    const saveClick = () => {
      setSave(save + (isSave ? -1 : 1))
      setIsSave(!isSave)
    }
    const likeButtonClick = () => {
        setLike(like + (islike ? -1 : 1))
        setIsLike(!islike);
      }
    return (
        <>
         <div className="video-media">
              {user ?
                <div className='home-page'>
                  <button className='home-btn' onClick={likeButtonClick}>
                    {islike ?
                      <FavoriteIcon sx={{ color: '#ff235f', transition: '.5s' }} />
                      :
                      <FavoriteIcon sx={{ color: 'black' }} />
                    }
                  </button>
                  <p className='home-count'>{like}</p>
                </div>
                :
                <div className="home-page">
                  <button className='home-btn' onClick={() => { setLogin(!login) }}><FavoriteIcon sx={{ color: 'black' }} /></button>
                </div>
              }
              <div className='home-page'>
                <button className='home-btn ' onClick={() => setComment(!comment)}>
                  <AssistantIcon />
                </button>
              </div>
              {user ?
                <div className='home-page' >
                  <button className='home-btn' onClick={saveClick}>
                    {isSave ?
                      < BookmarkIcon sx={{ color: 'gold', transition: '.5s' }} />
                      :
                      < BookmarkIcon sx={{ color: 'black' }} />
                    }
                  </button>
                  <p className='home-count'>{save}</p>
                </div>
                :
                <div className='home-page' >
                  <button className='home-btn' onClick={() => { setLogin(!login) }}>
                    < BookmarkIcon />
                  </button>
                </div>

              }
              <div className='home-page' onClick={() => setSend(!send)}>
                <button className='home-btn'>
                  <img style={{ width: '24px', height: '24px' }} src={share} alt="share" />
                </button>
              </div>
            </div>
            {
          comment && (
            <Comments/>
          )
        }
          {
          send && (
            <div className='send-menu-home'>
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
          )
        }
        </>
    )
}
