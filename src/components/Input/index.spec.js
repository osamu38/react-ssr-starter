import React from 'react';
import Input from 'components/Input';
import 'jest-styled-components';

describe('<Input />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Input />);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        padding: 0 12px;
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        border: 2px #ccc solid;
        line-height: 40px;
      }

      <Input>
        <styled.input>
          <input
            className="c0"
          />
        </styled.input>
      </Input>
    `);
  });
});
