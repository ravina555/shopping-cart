import Cart from '../components/Cart';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()})
describe('should render Cart component',()=>{
    it('should match snapshot',()=>{
        let cart = renderer.create(<Cart/>);
        expect(cart).toMatchSnapshot();
    });
    it('should have children component',()=>{
        let cartInstance = shallow(<Cart/>);
        expect(cartInstance.props().children).toBeDefined();
        expect(cartInstance.props().className).toBe('cartBg');
    });
    xit('should fetch the product data',done=>{
        // const wrapper = mount(<Cart/>);
        // console.log(wrapper)
      
    })
})