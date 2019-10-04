import React from 'react';
import Footer from 'components/Footer';
import 'jest-styled-components';

describe('<Footer />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Footer>Footer</Footer>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        height: 56px;
        padding: 12px 16px;
        color: #fff;
        background-image: linear-gradient( 120deg, #f68084 0%, #a6c0fe 100% );
        text-align: center;
        line-height: 32px;
      }

      <Footer>
        <styled.div>
          <div
            className="c0"
          >
            © 2018 osamu38
          </div>
        </styled.div>
      </Footer>
    `);
  });
});
