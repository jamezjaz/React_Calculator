import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });
import Quotes from '../components/Quotes';

describe('<Quotes />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Quotes />);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('it contains <strong> element', () => {
    const strong = <strong>— Albert Einstein</strong>;
    expect(wrapper.containsMatchingElement(strong)).toBe(true);
  });

  it('<div> element has a <p> element', () => {
    const div = wrapper.find('.quotes');
    const para = 
      <p>
        * Pure mathematics is, in its way, the poetry of logical ideas.
        <strong> — Albert Einstein</strong>
      </p>
    expect(div.containsMatchingElement(para)).toBe(true);
  });

  it('should fail if the text on <strong> element is incorrect', () => {
    const strongText = <strong> — Odufu James Chigozie</strong>;
    expect(wrapper.containsMatchingElement(strongText)).toBe(false);
  });
});