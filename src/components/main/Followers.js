import React, { useState } from "react";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignUp from "../SignUp/SignUp";
import './Home.css'
export default function Followers() {
  const [login, setLogin] = useState(false);
  const [user] = useAuthState(auth);
  const [follow, setFollow] = useState(false);
  const handleClick = () => {
    setFollow(!follow)
  }
  return (
    <>
      <div >
        {user ?
          <div className="follow-buttons" onClick={handleClick}>
            {follow ?
             <button  className='home-sign-btn'>Подписаться</button>
             :
             <button className='home-sign-btn-second'>Подписки</button>
            }
           
          </div>
          :
          <button className='home-sign-btn' onClick={() => setLogin(!login)}>Подписаться</button>
        }
      </div>
      {login && (
        <SignUp closeModal={setLogin} />
      )}
    </>
  )
}