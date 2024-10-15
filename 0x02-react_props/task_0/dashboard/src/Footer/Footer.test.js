import { shallow } from 'enzyme';
import Footer from './Footer';
import App from '../App/App';


describe('<Footer />', () => {
    it('it renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });

    it('App contains the Footer: div with the class App-Footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Footer className='App-Footer' />));
    });
});