import React from 'react';
import MenuIcon from 'components/MenuIcon';
import 'jest-styled-components';

describe('<MenuIcon />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<MenuIcon>MenuIcon</MenuIcon>);

    expect(wrapper).toMatchInlineSnapshot(`
      .c0 {
        cursor: pointer;
      }

      .c1 {
        padding: 4px;
        width: 32px;
      }

      <MenuIcon>
        <styled.span
          onClick={[Function]}
        >
          <span
            className="c0"
            onClick={[Function]}
          >
            <styled.img
              alt="menu-icon"
              src="/static/images/svg/menu-icon.svg"
            >
              <img
                alt="menu-icon"
                className="c1"
                src="/static/images/svg/menu-icon.svg"
              />
            </styled.img>
          </span>
        </styled.span>
      </MenuIcon>
    `);
  });
});
