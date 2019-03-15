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
    <StyledComponent
      forwardedComponent={
        Object {
          "$$typeof": Symbol(react.forward_ref),
          "attrs": Array [],
          "componentStyle": ComponentStyle {
            "componentId": "sc-bdVaJa",
            "isStatic": true,
            "lastClassName": "c0",
            "rules": Array [
              "
  cursor: pointer;
",
            ],
          },
          "displayName": "styled.span",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "span",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
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
          <StyledComponent
            alt="menu-icon"
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-bwzfXH",
                  "isStatic": true,
                  "lastClassName": "c1",
                  "rules": Array [
                    "
  padding: 4px;
  width: 32px;
",
                  ],
                },
                "displayName": "styled.img",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "img",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
            src="/static/images/svg/menu-icon.svg"
          >
            <img
              alt="menu-icon"
              className="c1"
              src="/static/images/svg/menu-icon.svg"
            />
          </StyledComponent>
        </styled.img>
      </span>
    </StyledComponent>
  </styled.span>
</MenuIcon>
`);
  });
});
