import './Home.css';
import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
export default function Comments() {
    return (
      <div className='comment'>
        <div>
          name
        </div>
        <div className="comment-field">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar />
            my name
          </div>
        </div>
        <div className='comment-flex'>
          <input className='comment-input' type="text" placeholder='Отправить комментарий' />
          <SendIcon sx={{ color: 'gold', marginLeft: 1 }} />
        </div>
      </div>
    )
  }