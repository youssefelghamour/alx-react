import React from 'react';


export default function NotificationItem(props) {
    return props.value ? (
        <li data-notification-type={props.type}>{props.value}</li>
    ) : (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}></li>
    );
}