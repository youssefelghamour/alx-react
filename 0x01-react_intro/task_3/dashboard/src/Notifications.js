import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';


export default function Notifications() {
    const buttonStyle = {
        background: 'none',
        border: 'none',
        marginRight: '0',
        marginLeft: 'auto',
        cursor: 'pointer',
    };

    const iconStyle = {
        width: '26px',
    };

    return (
        <div className='Notifications'>
            <button aria-label='Close' style={buttonStyle} onClick={() => console.log('Close button has been clicked')}>
                <img src={closeIcon} style={iconStyle} alt='close'/>
            </button>

            <p>Here is the list of notifications</p>

            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html:getLatestNotification() }}/>
            </ul>
        </div>
    );
}