import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';


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
                <NotificationItem type="default" value="New course available"/>
                <NotificationItem type="urgent" value="New resume available"/>
                <NotificationItem type="urgent" html={{ __html:getLatestNotification() }}/>
            </ul>
        </div>
    );
}