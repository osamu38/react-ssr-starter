import React from 'react';
import Button from 'components/Button';

describe('<Button />', () => {
  it('render children', () => {
    const children = 'Button';
    const wrapper = shallow(<Button>{children}</Button>);

    expect(wrapper.prop('children')).toEqual(children);
  });
  it('render snapshots', () => {
    const wrapper = shallow(<Button>Button</Button>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('call onclick', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button />);

    wrapper.setProps({ onClick: mock });
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalled();
  });
});
