import React, { useState } from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function MediaBlog() {
    const [state, setState] = useState(1);
    const action = (index) => {
        setState(index);
    };
    return (
        <>
            <div className='contents'>
                <div onClick={() => action(1)} className={`${state === 1 ? 'button-active' : 'button'}`}>Клипы</div>
                <div onClick={() => action(2)} className={`${state === 2 ? 'button-active' : 'button'}`}>Избранные</div>
                <div onClick={() => action(3)} className={`${state === 3 ? 'button-active' : 'button'}`}>Лайкнул(а)</div>
            </div>
            <div className='pages'>
                <div className={`${state === 1 ? 'blogs-active' : 'blogs'}`}>
                    <PermIdentityIcon sx={{ color: '#e1e0decd', fontSize: 70 }} />
                    <span className='profile-text'>Загрузите своё первое видео</span>
                    <p className='prof-past'>Здесь появяться ваши видео</p>
                </div>
                <div className={`${state === 2 ? 'blogs-active' : 'blogs'}`}>
                    <BookmarkBorderIcon sx={{ color: '#e1e0decd', fontSize: 70 }} />
                    <span className='profile-text'>Избранные публикации </span>
                    <p className='prof-past'>Здесь появятся избранные публикации</p>
                </div>
                <div className={`${state === 3 ? 'blogs-active' : 'blogs'}`}>
                    <FavoriteBorderIcon sx={{ color: '#e1e0decd', fontSize: 70 }} />
                    <span className='profile-text'>Вы ещё не лайкнули видео</span>
                    <p className='prof-past'>Здесь можно увидеть лайки которые вы лайкнули</p>
                </div>

            </div>
        </>
    )
}