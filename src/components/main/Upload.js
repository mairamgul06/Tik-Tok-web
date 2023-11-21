import React, { useState } from 'react';
import './Upload.css';
import { useNavigate } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBack from '@mui/icons-material/ArrowBack';
import UploadStorage from './UploadStorage';
import CircularProgress from '@mui/material/CircularProgress';
export default function Upload() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const { handleChange, handleUpload, handleDag, handleDrop, percent, video, handleInut } = UploadStorage();
    return (
        <div className='Upload'>
            <button onClick={goBack} className='btn-arrow'><ArrowBack /></button>
            <div className="upload-wrapper">
                <div className='upload-text'>
                    <h1 className='upload-title'>Загрузка видео</h1>
                    <span>Опубликовать видео</span>
                </div>
                <div className='upload-content-wrap' onDragOver={handleDag} onDrop={handleDrop}>
                    {percent ?
                        <div className='upload-wrap'>
                            <CircularProgress sx={{color:'crimson'}}/>
                            <p style={{ position: 'absolute', top: '210px', left: '117px', fontSize:12, color:'crimson',fontWeight:500 }}>{percent}%</p>
                        </div>
                        :
                        <div className='upload-wrap'>
                            <span className='upload-subtitle'>Выберите видео для <br /> загрузки</span>
                            <d className='text'>
                                <h3 className='upload-texts'>Или перетащите файл</h3>
                                <p className='upload-texts'>MP4 или WebM </p>
                                <p className='upload-texts'>Разрешение 1280x720 или выше </p>
                                <p className='upload-texts'>До 30 минут </p>
                                <p className='upload-texts'>Менее 2 ГБ </p>
                            </d>
                            <div class="file-input">
                                <input type="file" id="file" class="file" onChange={handleChange} />
                                <label for="file">Выберите файл</label>
                            </div>
                        </div>
                    }

                    <div className='upload-content-blog'>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between'
                        }}>
                            <p>Заголовок</p>
                            <p>0/2000</p>
                        </div>
                        <div className='upload-content'>
                            <input className='upload-input' type="text" onChange={handleInut} />
                            <p className='upload-me '> @   #</p>
                        </div>
                        <div>Обложка</div>
                        <div className='upload-blog'></div>
                        <div className='upload-buttons'>
                            <button className='upload-button'>Удалить</button>
                            <button className='upload-button' onClick={handleUpload}>Опубликовать</button>

                        </div>
                    </div>

                </div>
            </div>


        </div>

    )

}


