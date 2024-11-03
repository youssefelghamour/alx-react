import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from "./uiActionCreators";
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";


describe('uiActionCreators', () => {
    it('login action creator', () => {
        const result = {
            type: LOGIN,
            user: {
                email: 'example@email.com',
                password: 'password1',
            }
        };
        expect(login('example@email.com', 'password1')).toEqual(result);
    });

    it('logout action creator', () => {
        expect(logout()).toEqual({ type: LOGOUT });
    });

    it('displayNotificationDrawer action creator', () => {
        expect(displayNotificationDrawer()).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
    });

    it('hideNotificationDrawer action creator', () => {
        expect(hideNotificationDrawer()).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
    });
});