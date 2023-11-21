import React from 'react'
import './HelpFooter.css';
import Footer from '../footer/Footer';
import HelpOther from './HelpOther';
export default function HelpFooter() {
    return (
        <div className='help-footer'>
            <div>
                <HelpOther/>
            </div>
            <div><Footer/></div>
        </div>
    )
}
