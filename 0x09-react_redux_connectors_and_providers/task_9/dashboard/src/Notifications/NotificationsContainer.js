import React, { Component } from "react";
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from "react-redux";
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from "./Notifications";
import PropTypes from 'prop-types';


class NotificationsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotifications();
    }
    
    render() {
        return (
            <Notifications {...this.props} />
        )
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


const mapStateToProps = (state) => ({
    listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
    fetchNotifications,
    markNotificationAsRead: markAsAread,
    setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);