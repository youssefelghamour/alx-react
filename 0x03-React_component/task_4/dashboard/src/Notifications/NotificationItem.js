import React, { Component } from 'react';
import PropTypes from 'prop-types';


class NotificationItem extends Component {
    render() {
        return this.props.value ? (
            <li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)}>
                {this.props.value}
            </li>
        ) : (
            <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={() => this.props.markAsRead(this.props.id)}></li>
        );
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
    id: 0,
    type: 'default',
    markAsRead: () => {},
};


export default NotificationItem;