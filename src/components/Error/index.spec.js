import React from 'react';
import Error from 'components/Error';
import 'jest-styled-components';

describe('<Error />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Error>Error</Error>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        position: fixed;
        top: 0;
        bottom: 0;
        display: table;
        margin: auto;
        padding: 12px;
        width: 100%;
        box-shadow: 0 1px 23px 0 rgba(0,0,0,0.2);
        background-color: #f68084;
        color: #fff;
        text-align: center;
        opacity: 0;
        -webkit-animation: HIpHm 4s ease;
        animation: HIpHm 4s ease;
      }

      <Error>
        <styled.div
          onAnimationEnd={[Function]}
        >
          <div
            className="c0"
            onAnimationEnd={[Function]}
          >
            Error
          </div>
        </styled.div>
      </Error>
    `);
  });
});
