import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { normalizedData, notificationsNormalizer } from "../schema/notifications";


const notificationInitialState = Map({
    filter: "DEFAULT",
    notifications: [],
});

export const notificationReducer = (state = notificationInitialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notificationsNormalizedData = notificationsNormalizer(action.data).notifications;
            Object.keys(notificationsNormalizedData).forEach(id => {
                notificationsNormalizedData[id].isRead = false;
            });
            return state.set('notifications', notificationsNormalizedData);
        case MARK_AS_READ:
            return state.setIn(['notifications', String(action.index), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);
        default:
            return state;
    }
};


/*
FETCH_NOTIFICATIONS_SUCCESS action:
{
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent",  value: "New resume available" },
        { id: 3, type: "urgent",  value: "New data available"   }
    ]
};

notificationsNormalizer(action.data) would look like this:

users and messages are still present in the normalized output but they are empty objects
because the original data did not contain any references to users or messages

but author and context are not included in the notifications,
if no data is included (user and messages), they're only
referenced if there's data for them

{
    users: {},  // Empty because no user data in the original action.data
    messages: {}, // Empty because no message data in the original action.data
    notifications: {
        '1': { id: 1, type: "default", value: "New course available" },
        '2': { id: 2, type: "urgent",  value: "New resume available" },
        '3': { id: 3, type: "urgent",  value: "New data available"   },
    },
    result: [1, 2, 3]
}


The state after dispatching the action would look like this:
Map({
  filter: "DEFAULT",
  notifications: {
    '1': { id: 1, type: "default", value: "New course available", isRead: false },
    '2': { id: 2, type: "urgent",  value: "New resume available", isRead: false },
    '3': { id: 3, type: "urgent",  value: "New data available",   isRead: false },
  }
})




*************************
MARK_AS_READ action:
{
    type: MARK_AS_READ,
    index: 2
};




*************************
SET_TYPE_FILTER action:
{
    type: SET_TYPE_FILTER,
    filter: "URGENT"
};
*/