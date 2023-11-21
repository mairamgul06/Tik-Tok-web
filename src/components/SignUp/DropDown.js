import React, { useState } from "react";
import './DropDown.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import MotionPhotosAutoOutlinedIcon from '@mui/icons-material/MotionPhotosAutoOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import OutputIcon from '@mui/icons-material/Output';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import KeyboardHideOutlinedIcon from '@mui/icons-material/KeyboardHideOutlined';
import Switch from '@mui/material/Switch';
import HotKeys from "../main/HotKeys";
import Logout from "./Logout";



function Dropdown(props) {
    const [menu, setMenu] = useState(false);
    const [key, setKey] = useState(false);
    const [down, setDown] = useState(1);
    const action = (index) => {
        setDown(index);
    };
    const [logout, setLogout] = useState(false)


    return (
        <>
            <div>
                <div className="tab__options">
                    <Link to={"profile"} className='tab__li'><div className="tab__option-text"><PersonOutlineIcon sx={{ color: 'black', paddingLeft: 1 }} /><p>Смотреть профиль</p></div></Link>
                    <Link to={"profile"} className="tab__li"><div className="tab__option-text"><BookmarkBorderIcon sx={{ color: 'black', paddingLeft: 1 }} /><p>Избранное</p></div></Link>
                    <Link to={"settings"} className='tab__li'><div className=" tab__option-text"><Brightness5Icon sx={{ color: 'black', paddingLeft: 1 }} /><p>Настройки</p></div></Link>
                    <div className="tab__option-text" onClick={() => setMenu(!menu)}><MotionPhotosAutoOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Русский</p></div>
                    <Link to={"help"} className="tab__li"><div className="tab__option-text"><HelpOutlineIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Обратная связ и помощь</p></div></Link>
                    <div className="tab__option-text" onClick={() => setKey(!key)}><KeyboardHideOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Горячие клавиши</p></div>
                    <div className="tab__option-text"><DarkModeOutlinedIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Тёмный режим</p> <Switch sx={{ marginLeft: 2 }} /></div>
                    <div className="tab__option-text tab__option-text-last" onClick={() => { setLogout(!logout) }}><OutputIcon sx={{ color: "black", paddingLeft: 1 }} /><p>Выйти</p></div>

                </div>
            </div>
            {menu && (
                <div className="tab__menu-option" closeModal={setMenu}>
                    <div className="tab__option-text"> <p className="option-text">Русский</p></div>
                    <div className="tab__option-text"> <p className="option-text">English</p></div>
                    <div className="tab__option-text"> <p className="option-text">Franch</p></div>
                    <div className="tab__option-text"><p className="option-text">Chines</p></div>
                    <div className="tab__option-text"> <p className="option-text">Ураинский</p></div>
                </div>

            )
            }

            {key && (
                <HotKeys closeModal={setKey} />
            )}
            {logout && (
                <Logout closeModal={setLogout} />
            )}


        </>
    );
}
export default Dropdown;