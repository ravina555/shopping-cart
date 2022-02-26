import ShoppingCard from '../components/ShoppingCard';
import Enzyme,{shallow,mount, ReactWrapper} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()})

describe('it should render shopping card',()=>{
    const Products=[{
        category: "men's clothing",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    }]
       
    it('should match snapshot',()=>{
        const card = renderer.create(<ShoppingCard />);
        expect(card).toMatchSnapshot();
    });
})