import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search'
import Icon from './search.png';
import { User } from '../../User';
export default function SearchBar() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState()
    return (
        <div className="Searchbar">
            <div className="searchbar__content" onClick={() => setOpen(!open)}>
                <input className="searchbar__input" type="search"
                    placeholder="Поиск"
                    onChange={(e) => setQuery(e.target.value)} />
                <button className="searchbar__search">
                    <SearchIcon />
                </button>
            </div>
            {open && (
                <div className='search__result'>
                    {User.filter(user => user.name.toLowerCase().includes(query)).map(user => (

                        <li key={user.id} className='link-list'><img style={{ width: '16px', height: '16px' }} src={Icon} alt="" /> {user.name}</li>
                    ))}
                </div>
            )}
        </div>
    );
}