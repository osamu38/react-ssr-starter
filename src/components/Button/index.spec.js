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
    <StyledComponent
      forwardedComponent={
        Object {
          "$$typeof": Symbol(react.forward_ref),
          "attrs": Array [],
          "componentStyle": ComponentStyle {
            "componentId": "sc-bdVaJa",
            "isStatic": false,
            "lastClassName": "c0",
            "rules": Array [
              "
  display: block;
  width: 100%;
  max-width: 180px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: ",
              "#f68084",
              ";
  text-align: center;
  cursor: pointer;
  border: 2px ",
              "#f68084",
              " solid;
  ",
              [Function],
              ";
",
            ],
          },
          "displayName": "styled.button",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "button",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
    >
      <button
        className="c0"
      >
        Button
      </button>
    </StyledComponent>
  </styled.button>
</Button>
`);
  });
});
