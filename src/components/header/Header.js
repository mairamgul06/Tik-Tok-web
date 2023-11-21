import React, { useState } from 'react';
import './Header.css'
import logo from './tiktok.svg';
import Message from "../main/Message";
import Setting from '../main/Setting';
import Browser from '../Browser';
import { Routes, Route } from "react-router-dom";
import Home from "../main/Home";
import Follow from "../main/Follow";
import About from "../main/About";
import Broad from "../main/Broad";
import Profiles from "../main/Profiles";
import HelpFooter from '../main/HelpFooter';
import Contact from '../footer/Contact';
import Main from '../main/Main';
import Links from './Links';
import SearchBar from './SearchBar';

export default function Header(props) {




    return (
        <div className="Header">
            <div className='header__flex'>
                <div className="header__content">
                    <img src={logo} className="header__logo" alt="" />
                    <h1 className="header__title">TikTok</h1>
                </div>
                <div className='header__content'>
                    <SearchBar/>
                </div>
                <div className='header__content header__content-last '>
                    <Links/>
                </div>
            </div>
            <div className='header'>
                <div className=' flex-top'>
                    <Routes>
                        <Route path='/*' element={<Browser />}>
                            <Route index element={<Home />} />
                            <Route path='follow' element={<Follow />} />
                            <Route path='about' element={<About />} />
                            <Route path='broad' element={<Broad />} />
                            <Route path='profile' element={<Profiles />} />
                        </Route>
                        <Route path='upload' element={<Main />} />
                        <Route path='upload/:contact' element={<Contact />} />
                        <Route path='message' element={<Message />} />
                        <Route path='settings' element={<Setting />} />
                        <Route path='help' element={<HelpFooter />} />
                        <Route path='help/:contact' element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}



