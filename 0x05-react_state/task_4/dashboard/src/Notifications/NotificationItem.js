import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends PureComponent {
    render() {
        return this.props.value ? (
            <li data-notification-type={this.props.type}
                onClick={() => this.props.markAsRead(this.props.id)}
                className={ this.props.type === 'default' ? css(styles.default) : css(styles.urgent)}
            >
                {this.props.value}
            </li>
        ) : (
            <li data-notification-type={this.props.type}
                dangerouslySetInnerHTML={this.props.html}
                onClick={() => this.props.markAsRead(this.props.id)}
                className={ this.props.type === 'default' ? css(styles.default) : css(styles.urgent)}
            ></li>
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

const styles = StyleSheet.create({
    default: {
        color: 'rgb(0, 0, 109)',
        '@media (max-width: 900px)': {
            width: '100%',
            listStyleType: 'none',
            fontSize: '20px',
            padding: '10px 8px',
            borderBottom: '1px solid black',
        }
    },

    urgent: {
        color: 'rgb(222, 0, 0)',
        '@media (max-width: 900px)': {
            width: '100%',
            listStyleType: 'none',
            fontSize: '20px',
            padding: '10px 8px',
            borderBottom: '1px solid black',
        }
    },
});

export default NotificationItem;