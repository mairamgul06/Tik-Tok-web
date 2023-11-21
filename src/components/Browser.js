import React, { useState } from 'react';
import './Browser.css';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import { Outlet, NavLink } from "react-router-dom";
import Content from './main/Content';
export default function Browser(props) {
    return (
        <div className="Browser" >
            <div className='all-side'>
                <div className='side_links'>
                    <NavLink className="link" to={''} style={({ isActive }) => ({ color: isActive ? "#ff235f" : "black", })}>
                        <HomeRoundedIcon sx={{ fontSize: 30, paddingRight: 2 }} />
                        <p>Рекомендуем</p>
                    </NavLink>
                    <NavLink className="link" to="follow" style={({ isActive }) => ({ color: isActive ? "#ff235f" : "black", })}>
                        <GroupIcon sx={{ fontSize: 30, paddingRight: 2 }} />
                        <p>Подписки</p>
                    </NavLink>
                    <NavLink className="link" to="about" style={({ isActive }) => ({ color: isActive ? "#ff235f" : "black", })}>
                        <ExploreIcon sx={{ fontSize: 30, paddingRight: 2 }} />
                        <p>Смотреть</p>
                    </NavLink>
                    <NavLink className="link" to="broad" style={({ isActive }) => ({ color: isActive ? "#ff235f" : "black", })}>
                        <VideocamRoundedIcon sx={{ fontSize: 30, paddingRight: 2 }} />
                        <p>Трансляция</p>
                    </NavLink>
                </div>
                <div className='side'>
                    <Content/>
                </div>
            </div>
            <div className='browser__sidebar-blogs'>
                <Outlet />
            </div>

        </div>
    );



}

