import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
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


class Notifications extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead, setNotificationFilter, fetchNotifications } = this.props;

        return (
            <div className={css(styles.notificationsContainer)}>
                <div className={ !displayDrawer ? css(styles.menuItem) : css(styles.hide)} onClick={handleDisplayDrawer}>
                    Your notifications
                </div>

                { displayDrawer ? 
                    (<div className={css(styles.notifications)}>
                        <button aria-label='Close' style={buttonStyle} onClick={handleHideDrawer}>
                            <img src={closeIcon} style={iconStyle} alt='close'/>
                        </button>

                        {listNotifications && 
                            <>
                                <p className={css(styles.p)}>Here is the list of notifications</p>
                                <div className={css(styles.filterContainer)}>
                                    <button className={css(styles.filterButton, styles.filterUrgent)} onClick={() => setNotificationFilter('URGENT')}>!!</button>
                                    <button className={css(styles.filterButton, styles.filterDefault)} onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
                                </div>
                            </>
                        }

                        <ul className={css(styles.ul)}>
                            { listNotifications ? (
                                Object.values(listNotifications).map((notification) => (
                                    <NotificationItem
                                        id={ notification.guid }
                                        key={ notification.guid }
                                        type={ notification.type }
                                        value={ notification.value }
                                        html={ notification.html }
                                        markAsRead={ markNotificationAsRead }
                                    />
                                ))
                            ) : (
                                <NotificationItem
                                    id={ 0 }
                                    type="default"
                                    value="No new notification for now"
                                    markAsRead={ markNotificationAsRead }
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
    listNotifications: PropTypes.object,
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
    fetchNotifications: PropTypes.func,
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: {},
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
    fetchNotifications: () => {},
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
        backgroundColor: 'white',
        boxShadow: '0 0 11px #cccccc',
        borderRadius: '10px',
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
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 900px)': {
            fontSize: '20px',
        },
    },

    ul: {
        '@media (max-width: 900px)': {
            padding: 0,
        },
    },

    filterContainer: {
        marginTop: '10px',
    },

    filterButton: {
        width: 'fit-content',
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0.5px 1px 2px',
        cursor: 'pointer !important',
        borderRadius: '5px !important',
        border: '0.5px solid rgba(128, 128, 128, 0.506)',
        
    },

    filterUrgent: {
        padding: '3px 7px',
        marginRight: '5px',
        fontWeight: '800',
        color: '#e24744',
        ':hover': {
            backgroundColor: 'rgba(219, 219, 219, 0.477)',
        },
    },

    filterDefault: {
        padding: '3px 3px',
        ':hover': {
            backgroundColor: 'rgba(219, 219, 219, 0.477)',
        },
    },
});

export default Notifications;