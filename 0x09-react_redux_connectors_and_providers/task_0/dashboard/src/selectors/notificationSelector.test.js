import { FETCH_NOTIFICATIONS_SUCCESS } from "../actions/notificationActionTypes";
import { notificationReducer } from "../reducers/notificationReducer";
import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
const { Map } = require('immutable');


describe('notificationSelector', () => {
    const state = notificationReducer(undefined, {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data: [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent",  value: "New resume available" },
            { id: 3, type: "urgent",  value: "New data available"   }
        ]
    });
    /*
    const state = Map({
        filter: "DEFAULT",
        notifications: {
          '1': { id: 1, type: "default", value: "New course available", isRead: false },
          '2': { id: 2, type: "urgent",  value: "New resume available", isRead: true  },
          '3': { id: 3, type: "urgent",  value: "New data available",   isRead: false },
        }
    });
    */

    it('filterTypeSelected selector returns the value of the filter', () => {
        expect(filterTypeSelected(state)).toEqual("DEFAULT");
    });

    it('getNotifications selector returns the list of notifications in a Map format', () => {
        expect(getNotifications(state)).toEqual(state.get("notifications"));
    });

    it('getUnreadNotifications selector returns the list of unread notifications in a Map format', () => {
        const notifications = state.get('notifications');
        const unreadNotifications = Object.values(notifications).filter(notification => notification.isRead === false);
        expect(getUnreadNotifications(state)).toEqual(unreadNotifications);
    });
});