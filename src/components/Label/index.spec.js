import React from 'react';
import Label from 'components/Label';
import 'jest-styled-components';

describe('<Label />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Label>Label</Label>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        font-size: 14px;
        font-weight: bold;
        color: #666;
      }

      <Label>
        <styled.span>
          <span
            className="c0"
          >
            Label
          </span>
        </styled.span>
      </Label>
    `);
  });
});
