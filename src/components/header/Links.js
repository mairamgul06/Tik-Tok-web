import React, {useState} from "react";
import Switch from '@mui/material/Switch';
import HotKeys from '../main/HotKeys';
import Dropdown from '../SignUp/DropDown';
import DropWorld from '../SignUp/DropWorld';
import SignUp from '../SignUp/SignUp';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddIcon from '@mui/icons-material/Add';
import image from './image.png';
import { auth } from '../firebase';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MotionPhotosAutoOutlinedIcon from '@mui/icons-material/MotionPhotosAutoOutlined';
import KeyboardHideOutlinedIcon from '@mui/icons-material/KeyboardHideOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import sendIcon from './send.png'
export default function Links() {
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [state, setState] = useState(false);
    const [user] = useAuthState(auth);
    const [wrap, setWrap] = useState(false);
    const [key, setKey] = useState(false);
    const signOut = () => {
        signOut(auth);
    };
    const [down, setDown] = useState(1);
    const action = (index) => {
        setDown(index);
    };
    return (
        <>
            {user ?
                <Link to="upload" style={{ textDecoration: 'none' }}><button className="tab__btn-first"><AddIcon sx={{ paddingRight: 1 }} />Загрузить</button></Link>
                :
                <button className="tab__btn-first" onClick={() => setLogin(!login)}><AddIcon sx={{ paddingRight: 1 }} />Загрузить</button>
            }
            {user ?
                <div className='header-user-page'>
                    <Link to="message"><img className="tab__image" src={sendIcon} alt="" />  </Link>
                    <img className="tab__images" src={image} alt="dropdown" onClick={() => setState(!state)} />
                    <img src={localStorage.getItem("profilePic")} alt="" className="profile__image" onClick={() => setOpen(!open)} />
                </div>
                :
                <div className='header-user-page'>
                    <button className='drop__entrance' onClick={() => setLogin(!login)}>Войти</button>
                    <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={() => setWrap(!wrap)} />
                </div>

            }
            {open && (
                <Dropdown />
            )}
            {state && (
                <DropWorld />
            )}
            {wrap && (
                <div className="dot-menu-list">
                    <div className="tab__option-text" ><MotionPhotosAutoOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Русский</p></div>
                    <Link style={{ textDecoration: 'none' }} to={'help'}><div className="tab__option-text"><HelpOutlineIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Обратная связ и помощь</p></div></Link>
                    <div className="tab__option-text" onClick={() => { setKey(!key) }}><KeyboardHideOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Горячие клавиши</p></div>
                    <div className="tab__option-text"><DarkModeOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Тёмный режим</p><Switch sx={{ marginLeft: 3 }} /></div>
                </div>
            )}
            {key && (
                <HotKeys closeModal={setKey} />
            )}
            {login && (
                <SignUp closeModal={setLogin} />
            )}
        </>
    )
}