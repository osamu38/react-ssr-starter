import React from 'react';
import Title from 'components/Title';
import 'jest-styled-components';

describe('<Title />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Title>Title</Title>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        margin-bottom: 12px;
        font-size: 24px;
        font-weight: bold;
        color: #f68084;
      }

      <Title>
        <styled.h1>
          <h1
            className="c0"
          >
            Title
          </h1>
        </styled.h1>
      </Title>
    `);
  });
});
