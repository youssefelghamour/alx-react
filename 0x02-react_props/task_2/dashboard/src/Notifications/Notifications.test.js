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
});