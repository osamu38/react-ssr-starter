import React from 'react';
import SubTitle from 'components/SubTitle';
import 'jest-styled-components';

describe('<SubTitle />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<SubTitle>SubTitle</SubTitle>);

    expect(wrapper).toMatchInlineSnapshot(`
.c0 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #666;
}

<SubTitle>
  <styled.div>
    <div
      className="c0"
    >
      SubTitle
    </div>
  </styled.div>
</SubTitle>
`);
  });
});
