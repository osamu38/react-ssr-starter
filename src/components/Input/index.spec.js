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
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  border: 2px ",
              "#ccc",
              " solid;
  line-height: 40px;
",
            ],
          },
          "displayName": "styled.input",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "input",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
    >
      <input
        className="c0"
      />
    </StyledComponent>
  </styled.input>
</Input>
`);
  });
});
