import { shallow } from 'enzyme';
import Header from './Header';
import App from '../App/App';


describe('<Header />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('App contains the Header: div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<header className='App-header' />));
    });
});