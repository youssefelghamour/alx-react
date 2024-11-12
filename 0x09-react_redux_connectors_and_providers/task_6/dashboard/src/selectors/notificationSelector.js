export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');
export const getUnreadNotifications = (state) => {
    // Get all notifications
    const notifications = state.notifications.getIn(['notifications', 'messages']);
    
    // Create a new object to store only the unread notifications
    const unreadNotifications = {};

    for (let key in notifications) {
        // If the notification is not read, add it to unreadNotifications
        if (!notifications[key].isRead) {
            unreadNotifications[key] = notifications[key];
        }
    }

    // Return the object with only unread notifications
    return unreadNotifications;
};