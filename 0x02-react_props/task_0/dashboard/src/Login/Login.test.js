import { shallow } from 'enzyme';
import Login from './Login';
import App from '../App/App';


describe('<Login />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('App contains the Login: div with the class App-login', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Login className='App-login' />));
    });
});