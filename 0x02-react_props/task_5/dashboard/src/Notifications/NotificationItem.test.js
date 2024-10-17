import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';


describe('<NotificationItem />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct html for dummy type="default" and value="test"', () => {
        const wrapper = shallow(<NotificationItem type='default' value='test'/>);
        expect(wrapper.find('li').text()).toBe('test');
        expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    });

    it('it renders the correct html with a dummy html={{ __html: "<u>test</u>" }}', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
        expect(wrapper.find('li').html()).toContain('<u>test</u>');
    });
});