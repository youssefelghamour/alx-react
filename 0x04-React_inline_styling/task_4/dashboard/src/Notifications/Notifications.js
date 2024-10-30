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
                <div className={ !displayDrawer ? css(styles.menuItem) : css(styles.hide)}>
                    Your notifications
                </div>

                { displayDrawer ? 
                    (<div className={css(styles.notifications)}>
                        <button aria-label='Close' style={buttonStyle} onClick={() => console.log('Close button has been clicked')}>
                            <img src={closeIcon} style={iconStyle} alt='close'/>
                        </button>

                        {listNotifications.length > 0 && <p className={css(styles.p)}>Here is the list of notifications</p>}

                        <ul className={css(styles.ul)}>
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

const opacityKeyframes = {
    'from': {
        opacity: 0.5,
    },

    'to': {
        opacity: 1,
    },
};

const translateKeyframes = {
    '0%': {
        transform: 'translateY(0)',
    },

    '25%': {
        transform: 'translateY(-5px)',
    },

    '50%': {
        transform: 'translateY(5px)',
    },

    '100%': {
        transform: 'translateY(0)',
    },
};

const styles = StyleSheet.create({
    notificationsContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '12px',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        '@media (max-width: 900px)': {
            right: 0,
        }
    },
    
    menuItem: {
        marginBottom: '8px',
        float: 'right',
        backgroundColor: '#fff8f8',
        cursor: 'pointer',

        ':hover': {
            animationName: [opacityKeyframes, translateKeyframes],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3',
        },

        '@media (max-width: 900px)': {
            marginRight: '12px',
        }
    },

    hide: {
        display: 'none',
    },
    
    notifications: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        border: '1.6px dashed #e0354b',
        position: 'relative',
        width: '25rem',
        padding: '1rem',
        boxSizing: 'border-box',
        '@media (max-width: 900px)': {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            backgroundColor: 'white',
            zIndex: '1',
            border: 'none',
            fontSize: '20px',
            padding: '25px 0px 0px',
        },
    },
    
    p: {
        fontSize: '1rem',
        margin: '0',
        '@media (max-width: 900px)': {
            fontSize: '20px',
        },
    },

    ul: {
        '@media (max-width: 900px)': {
            padding: 0,
        },
    },
});

export default Notifications;