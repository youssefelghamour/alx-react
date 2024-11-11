import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from "./notificationActionTypes";


describe('notificationActionCreators', () => {
    it('markAsAread action creator', () => {
        const result = {
            type: MARK_AS_READ,
            index: 1
        };
        expect(markAsAread(1)).toEqual(result);
    });

    it('setNotificationFilter action creator', () => {
        const result = {
            type: SET_TYPE_FILTER,
            filter: NotificationTypeFilters.DEFAULT,
        };
        expect(setNotificationFilter("DEFAULT")).toEqual(result);
    });
});