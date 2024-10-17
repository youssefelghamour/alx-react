import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';


export default function Notifications({ displayDrawer }) {
    const buttonStyle = {
        background: 'none',
        border: 'none',
        marginRight: '0',
        marginLeft: 'auto',
        cursor: 'pointer',
        position: 'absolute',
        top: '10px',
        right: '10px',
    };

    const iconStyle = {
        width: '20px',
    };

    return (
        <div className='Notifications-container'>
            <div className='menuItem'>
                Your notifications
            </div>

            { displayDrawer ? 
                (<div className='Notifications'>
                    <button aria-label='Close' style={buttonStyle} onClick={() => console.log('Close button has been clicked')}>
                        <img src={closeIcon} style={iconStyle} alt='close'/>
                    </button>

                    <p>Here is the list of notifications</p>

                    <ul>
                        <NotificationItem type="default" value="New course available"/>
                        <NotificationItem type="urgent" value="New resume available"/>
                        <NotificationItem type="urgent" html={{ __html:getLatestNotification() }}/>
                    </ul>
                </div>)
                : (<></>)
            }
            
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
    displayDrawer: false,
};