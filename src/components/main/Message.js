import React, { useEffect, useRef, useState } from 'react';
import './Message.css';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MessageStore from './MessageStore';
import { auth } from '../firebase';
import ClearIcon from '@mui/icons-material/Clear';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
export default function Message() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const { message, setMessage, sendMessage, messages, user, userUid} = MessageStore();
    const [close, setClose] = useState(false);



    return (
        <div className='Message'>
            <button onClick={goBack} className='message-arrow'><ArrowBack /></button>
            <div className='message-wrapper'>
                <div className='message-wrap-first'>
                    <div className='message-flex'>
                        <h1>Сообщения</h1>
                        <Brightness5Icon sx={{ fontSize: 30, marginLeft: 20, cursor:'pointer' }} onClick={()=> setClose(!close)}/>
                    </div>
                    <div className='message-drop'>
                        <img className="message-img"  src={localStorage.getItem("profilePic")} alt="" />
                        <h1 className='message-subtitle'> {localStorage.getItem("name")}</h1>
                    </div>

                </div>
                <div className='message-wrap-second'>
                    <div className='message-profiling'>
                        <img className="message-img"  src={localStorage.getItem("profilePic")} alt="message" />
                        <h1 className='message-subtitle'>{localStorage.getItem("name")}</h1>
                    </div>

                    <div className='message-field' >
                        <div className='message-text'>
                            {messages && messages.map((message, id, uid, photoURL) =>
                                <div key={id} className={`message ${userUid === auth.currentUser.uid ? 'sent' : 'received'}`} >
                                    <div style={{
                                        margin: 10,
                                        marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                        width: 'fit-content'


                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center'



                                        }}>
                                            <p style={{
                                                background: user.uid === message.uid ? 'rgba(22, 24, 35, 0.06)' : '#fff',
                                                borderRadius: '8px',
                                                width: 'fit-content ',
                                                height: '30px',
                                                padding: '2px 10px 2px 10px',
                                                border: '1px solid rgba(22, 24, 35, 0.12)'
                                            }}>{message.text}</p>
                                            <img className='message-png' src={message.photoURL} />
                                            <DeleteForeverIcon className='delete' sx={{ color: 'rgb(239, 66, 101)', opacity: 0 }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='message-sending'>
                        <input className='message-input' placeholder='Отправить сообщение' type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <SendIcon sx={{ fontSize: 30, marginLeft: 2, color: 'crimson', cursor: 'pointer' }} onClick={sendMessage} />
                    </div>
                    {close && (
                        <Modal closeModal={setClose}/>
                    )}
                </div>
            </div>
        </div>
    )
}
function Modal({closeModal }) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    return (
        <div className='Modal'>
            <div className="modal">
                <div className='first-modal'>
                    <h1 className='modal-title'>Настройки сообщений</h1>
                    <ClearIcon sx={{ fontSize: 22, cursor:'pointer' }} onClick={() => closeModal(false)}/>
                </div>
                <div className='second-modal'>
                    <div className='modal-texts'>
                        <span className='modal-subtitle'>Кто может отправлять вам личные сообщения</span>
                        <p className='modal-text '>Пользователи, которым вы отправили сообщение, всегда смогут ответить вам независимо от выбранного варианта. Друзья — <br /> это подписчики, на которых подписаны и вы.</p>

                    </div>
                    <div className='modal-radios'>
                       <div className='modal-flex'>
                       <Radio
                            {...controlProps('a')}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                          <p className='modal-radio-text'>Друзья</p>
                       </div>
                      
                        <div className='modal-flex'>
                        <Radio
                            {...controlProps('b')}
                            sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                    color: pink[600],
                                },
                            }}
                        />
                        <p className='modal-radio-text'>Друзья</p>
                        </div>
                    </div>

                </div>
                <div className='third-modal'>
                    <button className='modal-btn' onClick={() => closeModal(false)}>Отменить</button>
                    <button className='modal-btn'>Сохранить</button>
                </div>
            </div>
        </div>
    )
}
