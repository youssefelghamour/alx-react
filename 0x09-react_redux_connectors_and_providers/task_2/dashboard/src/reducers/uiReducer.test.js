import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { UiInitialState, uiReducer } from "./uiReducer";


describe('uiReducer', () => {
    it('returns the initial state when no action is passed', () => {
        expect(uiReducer(undefined, {})).toEqual(UiInitialState);
    });

    it('returns the initial state when the action SELECT_COURSE is passed', () => {
        const action = { type: 'SELECT_COURSE' };
        expect(uiReducer(undefined, action)).toEqual(UiInitialState);
    });

    it('returns the state with updated isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const action = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = UiInitialState.set('isNotificationDrawerVisible', true);
        expect(uiReducer(undefined, action)).toEqual(result);
    });
});