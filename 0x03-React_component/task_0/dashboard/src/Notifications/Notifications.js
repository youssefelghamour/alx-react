import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


export default function Notifications({ displayDrawer, listNotifications }) {
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

                    {listNotifications.length > 0 && <p>Here is the list of notifications</p>}

                    <ul>
                        { listNotifications.length > 0 ? (
                            listNotifications.map((notification) => (
                                <NotificationItem key={ notification.id } type={ notification.type } value={ notification.value } html={ notification.html }/>
                            ))
                        ) : (
                            <NotificationItem type="default" value="No new notification for now"/>
                        )}
                    </ul>
                </div>)
                : (<></>)
            }
            
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

/* used js default parameters instead
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};*/