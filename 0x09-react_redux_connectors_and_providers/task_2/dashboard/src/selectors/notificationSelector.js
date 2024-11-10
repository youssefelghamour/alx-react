export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');
export const getUnreadNotifications = (state) => {
    const notifications = state.get('notifications');
    return Object.values(notifications).filter(notification => notification.isRead === false);
};