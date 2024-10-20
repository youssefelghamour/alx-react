import { shallow } from 'enzyme';
import Login from './Login';


describe('<Login />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders 2 input tags and 2 label tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});