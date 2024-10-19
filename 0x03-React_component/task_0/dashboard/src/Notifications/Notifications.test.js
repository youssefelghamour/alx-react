import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('<Notifications />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });

    it('renders the NotificationItem componenet', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    });

    it('renders the NotificationItem componenet', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0); // Get the first NotificationItem

        expect(firstNotificationItem.prop('type')).toBe('default'); // Check the type prop
        expect(firstNotificationItem.prop('value')).toBe('New course available'); // Check the value prop
        expect(firstNotificationItem.prop('html')).toBeUndefined(); // Check that html prop is undefined
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });

    it('does not display the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBeFalsy();
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBeTruthy();
    });

    it('displays the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').exists()).toBeTruthy();
    });

    it('renders correctly with an empty listNotifications or no prop', () => {
        const wrapperWithEmptyArray = shallow(<Notifications listNotifications={[]} />);
        const wrapperWithoutProp = shallow(<Notifications />);
        expect(wrapperWithEmptyArray.find(NotificationItem)).toHaveLength(1);
        expect(wrapperWithoutProp.find(NotificationItem)).toHaveLength(1);
    });

    it('renders notifications correctly when passed a list', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', html: { __html: 'Notification 2' } }
        ];
        const wrapper = shallow(<Notifications listNotifications={notifications} />);
        expect(wrapper.find(NotificationItem)).toHaveLength(notifications.length);
    });

    it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications listNotifications={[]} displayDrawer={true} />);
        expect(wrapper.find('p').exists()).toBeFalsy();
        expect(wrapper.find(NotificationItem).prop('value')).toEqual('No new notification for now');
    });
});