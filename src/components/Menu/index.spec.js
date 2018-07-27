import React from 'react';
import Menu from 'components/Menu';
import 'jest-styled-components';

describe('<Menu />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Menu>Menu</Menu>);

    expect(wrapper).toMatchInlineSnapshot(`<Menu />`);
  });
});
