import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


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

    it('CourseList is not displayed when not logged in', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<CourseList />)).toBeFalsy();
    });
});


describe('<App isLoggedIn={ true } />', () => {
    it('does not contains the Login component', () => {
        const wrapper = shallow(<App isLoggedIn={ true } />);
        expect(wrapper.contains(<Login />)).toBeFalsy();
    });

    it('CourseList is included', () => {
        const wrapper = shallow(<App isLoggedIn={ true } />);
        expect(wrapper.contains(<CourseList />)).toBeTruthy();
    });
});