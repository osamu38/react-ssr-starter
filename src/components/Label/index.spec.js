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
  font-size: 14px;
  font-weight: bold;
  color: ",
              "#666",
              ";
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
    >
      <span
        className="c0"
      >
        Label
      </span>
    </StyledComponent>
  </styled.span>
</Label>
`);
  });
});
