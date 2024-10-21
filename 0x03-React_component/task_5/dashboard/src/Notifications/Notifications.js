import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


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


class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length) {
            return true;
        }

        return false;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

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
                                    <NotificationItem
                                        id={ notification.id }
                                        key={ notification.id }
                                        type={ notification.type }
                                        value={ notification.value }
                                        html={ notification.html }
                                        markAsRead={ this.markAsRead }
                                    />
                                ))
                            ) : (
                                <NotificationItem
                                    id={ 0 }
                                    type="default"
                                    value="No new notification for now"
                                    markAsRead={ this.markAsRead }
                                />
                            )}
                        </ul>
                    </div>)
                    : (<></>)
                }
                
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;