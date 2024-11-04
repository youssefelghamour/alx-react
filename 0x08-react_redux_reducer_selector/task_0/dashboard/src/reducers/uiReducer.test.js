import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { initialState, uiReducer } from "./uiReducer";


describe('uiReducer', () => {
    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {})).toEqual(initialState);
    });

    it('returns the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: 'SELECT_COURSE' };
        expect(uiReducer(undefined, action)).toEqual(initialState);
    });

    it('returns the state with updated isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        expect(uiReducer(undefined, action)).toEqual({ ...initialState, isNotificationDrawerVisible: true });
    });
});