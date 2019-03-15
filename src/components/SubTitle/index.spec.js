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
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: ",
              "#666",
              ";
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
        SubTitle
      </div>
    </StyledComponent>
  </styled.div>
</SubTitle>
`);
  });
});
