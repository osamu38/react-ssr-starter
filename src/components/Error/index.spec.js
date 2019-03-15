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
  -webkit-animation: fmFZHG 4s ease;
  animation: fmFZHG 4s ease;
}

<Error>
  <styled.div
    onAnimationEnd={[Function]}
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
  position: fixed;
  top: 0;
  bottom: 0;
  display: table;
  margin: auto;
  padding: 12px;
  width: 100%;
  box-shadow: 0 1px 23px 0 rgba(0, 0, 0, 0.2);
  background-color: ",
              "#f68084",
              ";
  color: ",
              "#fff",
              ";
  text-align: center;
  opacity: 0;
  animation: ",
              Keyframes {
                "id": "sc-keyframes-fmFZHG",
                "inject": [Function],
                "name": "fmFZHG",
                "rules": Array [
                  "@-webkit-keyframes fmFZHG{0%{opacity:0;}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}",
                  "@keyframes fmFZHG{0%{opacity:0;}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}",
                ],
                "toString": [Function],
              },
              " 4s ease;
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
      onAnimationEnd={[Function]}
    >
      <div
        className="c0"
        onAnimationEnd={[Function]}
      >
        Error
      </div>
    </StyledComponent>
  </styled.div>
</Error>
`);
  });
});
