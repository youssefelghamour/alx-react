import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


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
            <div className={css(styles.notificationsContainer)}>
                <div className={css(styles.menuItem)}>
                    Your notifications
                </div>

                { displayDrawer ? 
                    (<div className={css(styles.notifications)}>
                        <button aria-label='Close' style={buttonStyle} onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} style={iconStyle} alt='close'/>
                        </button>

                        {listNotifications.length > 0 && <p className={css(styles.p)}>Here is the list of notifications</p>}

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

const styles = StyleSheet.create({
    notificationsContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '12px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
    },
    
    menuItem: {
        marginBottom: '8px',
    },
    
    notifications: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        border: '1.6px dashed #e0354b',
        position: 'relative',
        width: '25rem',
    },
    
    p: {
        fontSize: '1rem',
        fontFamily: 'sans-serif',
        margin: '0',
    },
});

export default Notifications;