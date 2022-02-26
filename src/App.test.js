import App from './App';
import Enzyme,{shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
describe('ToggleComponent', () => {

  it('Should render App component', () => {
     let appInstance = shallow(<App/>);
     const tree = renderer.create(<App/>).toJSON();
     expect(appInstance.props().className).toBe('App')
     expect(appInstance.props().children).toBeDefined();

     expect(tree).toMatchSnapshot();
    
  });
});
