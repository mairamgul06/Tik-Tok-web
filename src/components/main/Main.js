import React from 'react'
import './Main.css';
import Upload from './Upload';
import Footer from '../footer/Footer';

export default function Main() {
    return (
        <div className='Main'>
            <div>
                <Upload />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
