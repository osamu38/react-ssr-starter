import React from 'react';
import UserDetail from 'components/UserDetail';
import userData from 'components/UserDetail/data';
import 'jest-styled-components';

describe('<UserDetail />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<UserDetail user={userData} />);

    expect(wrapper).toMatchInlineSnapshot(`
.c0 {
  padding: 12px;
  border: 1px #eee solid;
}

.c1 {
  margin-top: 12px;
  padding: 12px;
  border: 1px #eee solid;
}

<UserDetail
  user={
    Object {
      "address": Object {
        "city": "Gwenborough",
        "geo": Object {
          "lat": "-37.3159",
          "lng": "81.1496",
        },
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "zipcode": "92998-3874",
      },
      "company": Object {
        "bs": "harness real-time e-markets",
        "catchPhrase": "Multi-layered client-server neural-net",
        "name": "Romaguera-Crona",
      },
      "email": "Sincere@april.biz",
      "id": 1,
      "phone": "1-770-736-8031 x56442",
      "username": "Bret",
      "website": "hildegard.org",
    }
  }
>
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
  padding: 12px;
  border: 1px ",
              "#eee",
              " solid;
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
        <p>
          id: 
          1
        </p>
        <p>
          username: 
          Bret
        </p>
        <p>
          phone: 
          1-770-736-8031 x56442
        </p>
        <p>
          email: 
          Sincere@april.biz
        </p>
        <p>
          website: 
          hildegard.org
        </p>
        <styled.div>
          <StyledComponent
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
  margin-top: 12px;
  padding: 12px;
  border: 1px ",
                    "#eee",
                    " solid;
",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "div",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <div
              className="c1"
            >
              <p>
                address
              </p>
              <p>
                city: 
                Gwenborough
              </p>
              <p>
                street: 
                Kulas Light
              </p>
              <p>
                suite: 
                Apt. 556
              </p>
              <p>
                zipcode: 
                92998-3874
              </p>
              <p>
                lat: 
                -37.3159
              </p>
              <p>
                lng: 
                81.1496
              </p>
            </div>
          </StyledComponent>
        </styled.div>
        <styled.div>
          <StyledComponent
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
  margin-top: 12px;
  padding: 12px;
  border: 1px ",
                    "#eee",
                    " solid;
",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "div",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <div
              className="c1"
            >
              <p>
                company
              </p>
              <p>
                bs: 
                harness real-time e-markets
              </p>
              <p>
                catchPhrase: 
                Multi-layered client-server neural-net
              </p>
              <p>
                name: 
                Romaguera-Crona
              </p>
            </div>
          </StyledComponent>
        </styled.div>
      </div>
    </StyledComponent>
  </styled.div>
</UserDetail>
`);
  });
});
