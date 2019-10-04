import React from 'react';
import Button from 'components/Button';
import 'jest-styled-components';

describe('<Button />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Button>Button</Button>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        width: 100%;
        max-width: 180px;
        line-height: 40px;
        font-size: 16px;
        font-weight: bold;
        color: #f68084;
        text-align: center;
        cursor: pointer;
        border: 2px #f68084 solid;
      }

      <Button>
        <styled.button>
          <button
            className="c0"
          >
            Button
          </button>
        </styled.button>
      </Button>
    `);
  });
});
