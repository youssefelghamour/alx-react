import React from 'react';
import PropTypes from 'prop-types';


export default function NotificationItem(props) {
    return props.value ? (
        <li data-notification-type={props.type}>{props.value}</li>
    ) : (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>
    );
}

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: 'default',
};