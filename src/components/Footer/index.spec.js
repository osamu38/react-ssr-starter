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
  height: ",
              "56",
              "px;
  padding: 12px 16px;
  color: ",
              "#fff",
              ";
  background-image: linear-gradient(
    120deg,
    ",
              "#f68084",
              " 0%,
    ",
              "#a6c0fe",
              " 100%
  );
  text-align: center;
  line-height: 32px;
",
            ],
          },
          "displayName": "styled.div",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "div",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
    >
      <div
        className="c0"
      >
        © 2018 osamu38
      </div>
    </StyledComponent>
  </styled.div>
</Footer>
`);
  });
});
