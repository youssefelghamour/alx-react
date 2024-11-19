import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";
import { Map } from 'immutable';


export const initialStateUi = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

export const uiReducer = (state = initialStateUi, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true).set('loginError', null);
        case LOGIN_FAILURE:
            console.log(action.error);
            return state.set('isUserLoggedIn', false).set('loginError', action.error);
        case LOGOUT:
            return state.set('isUserLoggedIn', false).set('user', null);
        case LOGIN:
            return state.set('user', action.user);
        default:
            return state;
    }
};