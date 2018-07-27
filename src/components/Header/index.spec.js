import React from 'react';
import Header from 'components/Header';
import 'jest-styled-components';

describe('<Header />', () => {
  it('render snapshots', () => {
    const wrapper = shallow(<Header>Header</Header>);

    expect(wrapper).toMatchInlineSnapshot(`
<styled.div>
  <styled.div>
    <styled.div>
      <styled.div>
        <Logo />
      </styled.div>
      <styled.div>
        <MenuIcon />
      </styled.div>
      <styled.div>
        <OctIcon />
      </styled.div>
      <Menu />
    </styled.div>
  </styled.div>
</styled.div>
`);
  });
});
