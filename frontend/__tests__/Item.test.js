import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 5000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeImage: 'largedog.jpg'
};

// mounted = component renders and everything
// shallow is not a deep dive, not getting rendered out; renders top level component. In this case DeleteItem and other components don't render so we cant test them with shallow
descsribe('<Item/>', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
    // If you have multiple expects, say for img; then break it into another it function
    // if('renders the image properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    //     const img = wrapper.find('img');
    //     expect(img.props().src).toBe(fakeItem.image);
    //     expect(img.props().alt).toBe(fakeItem.title);
    //     // console.log(img.props());
    //     // console.log(img.debug());
    // });

    // it('renders and displays properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    //     const PriceTag = wrapper.find('PriceTag');
    //     // Adding the dive function allows us to pull the text from pricetag without mounted; renders 1 level deeper. 
    //     // We can also use the .children() function to render 1 level deeper
    //     console.log(PriceTag.dive().text());
    //     expect(PriceTag.children().text()).toBe('$50');
    //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    //     // console.log(wrapper.debug());
    // });

    // it('renders out the buttons properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    //     const buttonList = wrapper.find('.buttonList');
    //     expect(buttonList.children()).toHaveLength(3);
    //     expect(buttonList.find('Link')).toHaveLength(1);
    //     expect(buttonList.find('Link').exists()).toBe(true);
    //     expect(buttonList.find('AddToCart').exists()).toBe(true);
    //     expect(buttonLit.find('DeleteItem').exists()).toBe(true);
    //     // console.log(buttonList.children());
    // });
})