import React from 'react';
import { shallow } from 'enzyme';
import { withLayout } from './layout';

const MockComponent = <div>TODO</div>;

describe('test `layout` hoc', () => {
  it('test `withLayout()` hoc', () => {
    const LayoutedComponent = withLayout(MockComponent);
    const wrapper = shallow(<LayoutedComponent />);
    expect(wrapper.contains(<MockComponent />))
      .toBe(true);
  });
});
