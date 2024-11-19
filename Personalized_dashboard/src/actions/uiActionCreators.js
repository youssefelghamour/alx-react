import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./uiActionTypes";


export const login = (email, password) => ({
    type: LOGIN,
    user : { email, password, firstName: 'Youssef', lastName: 'EL GHAMOUR', studentId: '129 045', cohort: '18' },
});

export const boundLogin = (email, password) => dispatch(login(email, password));


export const logout = () => ({
    type: LOGOUT,
});

export const boundLogout = () => dispatch(logout());


export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());


export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());


export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});


export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});


export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));

        return fetch('http://localhost:8080/login-success.json')
            .then(() => dispatch(loginSuccess()))
            .catch((error) => dispatch(loginFailure()));
    };
};