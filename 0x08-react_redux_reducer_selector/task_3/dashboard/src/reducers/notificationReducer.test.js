import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationReducer } from "./notificationReducer";


describe('notificationReducer', () => {
    const initialState = {
        filter: "DEFAULT",
        notifications: [
            { id: 1, isRead: false, type: "default", value: "New course available" },
            { id: 2, isRead: false, type: "urgent",  value: "New resume available" },
            { id: 3, isRead: false, type: "urgent",  value: "New data available"   }
        ],
    };

    it('default state returns the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual({
            filter: "DEFAULT",
            notifications: [],
        });
    });

    it('FETCH_NOTIFICATIONS_SUCCESS returns the data passed with isRead set to false', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "New course available" },
                { id: 2, type: "urgent",  value: "New resume available" },
                { id: 3, type: "urgent",  value: "New data available"   }
            ]
        };
        expect(notificationReducer(undefined, action)).toEqual(initialState);
    });

    it('MARK_AS_READ updates the specified notification to isRead true', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2
        };
        const expectedState = {
            filter: "DEFAULT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: true,  type: "urgent",  value: "New resume available" },
                { id: 3, isRead: false, type: "urgent",  value: "New data available"   }
            ]
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

    it('SET_TYPE_FILTER updates the filter in the state', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: "URGENT"
        };
        const expectedState = {
            ...initialState,
            filter: "URGENT"
        };
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
});