import React from 'react';
import './Logout.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

export default function Logout({ closeModal }) {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <div className='Logout' onClick={() => { closeModal(false) }}>
      <div className='logout-flex'>
        <div className='logout-title'>
          Вы уверены, <br /> что хотите выйти?
        </div>
        <div className='logout-flex-buttons'>
          <button className='logout-btn-first' onClick={() => { closeModal(false) }}>Отмена</button>
          <button onClick={() => auth.signOut()} className='logout-btn'>Выйти</button>
        </div>
      </div>
    </div>
  )
}
