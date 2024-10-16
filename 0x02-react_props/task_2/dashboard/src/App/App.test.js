import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


describe('<App />', () => {
    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Notifications />)).toBeTruthy();
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).toBeTruthy();
    });

    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login />)).toBeTruthy();
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer />)).toBeTruthy();
    });
});