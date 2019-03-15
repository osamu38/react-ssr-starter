import React from 'react';
import Title from 'components/Title';
import 'jest-styled-components';

describe('<Title />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<Title>Title</Title>);

    expect(wrapper).toMatchInlineSnapshot(`
.c0 {
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: #f68084;
}

<Title>
  <styled.h1>
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
  font-size: 24px;
  font-weight: bold;
  color: ",
              "#f68084",
              ";
",
            ],
          },
          "displayName": "styled.h1",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "h1",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
    >
      <h1
        className="c0"
      >
        Title
      </h1>
    </StyledComponent>
  </styled.h1>
</Title>
`);
  });
});
