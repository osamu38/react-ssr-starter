import React from 'react';
import LoginForm from 'components/LoginForm';
import 'jest-styled-components';

describe('<LoginForm />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<LoginForm>LoginForm</LoginForm>);

    expect(wrapper).toMatchInlineSnapshot(`
.c6 {
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
  margin: 0 auto;
}

.c3 {
  font-size: 14px;
  font-weight: bold;
  color: #666;
}

.c5 {
  padding: 0 12px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  border: 2px #ccc solid;
  line-height: 40px;
}

.c0 {
  width: 100%;
}

.c1 {
  margin-bottom: 12px;
}

.c2 {
  width: 30%;
}

.c4 {
  width: 70%;
}

<LoginForm>
  <styled.form
    onSubmit={[Function]}
  >
    <StyledComponent
      forwardedComponent={
        Object {
          "$$typeof": Symbol(react.forward_ref),
          "attrs": Array [],
          "componentStyle": ComponentStyle {
            "componentId": "sc-bxivhb",
            "isStatic": true,
            "lastClassName": "c0",
            "rules": Array [
              "
  width: 100%;
",
            ],
          },
          "displayName": "styled.form",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bxivhb",
          "target": "form",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
      onSubmit={[Function]}
    >
      <form
        className="c0"
        onSubmit={[Function]}
      >
        <styled.div>
          <StyledComponent
            forwardedComponent={
              Object {
                "$$typeof": Symbol(react.forward_ref),
                "attrs": Array [],
                "componentStyle": ComponentStyle {
                  "componentId": "sc-ifAKCX",
                  "isStatic": true,
                  "lastClassName": "c1",
                  "rules": Array [
                    "
  margin-bottom: 12px;
",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-ifAKCX",
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
              <styled.span>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-EHOje",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  width: 30%;
",
                        ],
                      },
                      "displayName": "styled.span",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-EHOje",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c2"
                  >
                    <Label>
                      <styled.span>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-bwzfXH",
                                "isStatic": true,
                                "lastClassName": "c3",
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
                              "styledComponentId": "sc-bwzfXH",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c3"
                          >
                            Email
                          </span>
                        </StyledComponent>
                      </styled.span>
                    </Label>
                  </span>
                </StyledComponent>
              </styled.span>
              <styled.span>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-bZQynM",
                        "isStatic": true,
                        "lastClassName": "c4",
                        "rules": Array [
                          "
  width: 70%;
",
                        ],
                      },
                      "displayName": "styled.span",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-bZQynM",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c4"
                  >
                    <Input
                      name="email"
                      placeholder="dummy@dummy.com"
                      required={true}
                      type="email"
                    >
                      <styled.input
                        name="email"
                        placeholder="dummy@dummy.com"
                        required={true}
                        type="email"
                      >
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-htpNat",
                                "isStatic": true,
                                "lastClassName": "c5",
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
                              "styledComponentId": "sc-htpNat",
                              "target": "input",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                          name="email"
                          placeholder="dummy@dummy.com"
                          required={true}
                          type="email"
                        >
                          <input
                            className="c5"
                            name="email"
                            placeholder="dummy@dummy.com"
                            required={true}
                            type="email"
                          />
                        </StyledComponent>
                      </styled.input>
                    </Input>
                  </span>
                </StyledComponent>
              </styled.span>
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
                  "componentId": "sc-ifAKCX",
                  "isStatic": true,
                  "lastClassName": "c1",
                  "rules": Array [
                    "
  margin-bottom: 12px;
",
                  ],
                },
                "displayName": "styled.div",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-ifAKCX",
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
              <styled.span>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-EHOje",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  width: 30%;
",
                        ],
                      },
                      "displayName": "styled.span",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-EHOje",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c2"
                  >
                    <Label>
                      <styled.span>
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-bwzfXH",
                                "isStatic": true,
                                "lastClassName": "c3",
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
                              "styledComponentId": "sc-bwzfXH",
                              "target": "span",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                        >
                          <span
                            className="c3"
                          >
                            Password
                          </span>
                        </StyledComponent>
                      </styled.span>
                    </Label>
                  </span>
                </StyledComponent>
              </styled.span>
              <styled.span>
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-bZQynM",
                        "isStatic": true,
                        "lastClassName": "c4",
                        "rules": Array [
                          "
  width: 70%;
",
                        ],
                      },
                      "displayName": "styled.span",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-bZQynM",
                      "target": "span",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                >
                  <span
                    className="c4"
                  >
                    <Input
                      name="password"
                      placeholder="dummy"
                      required={true}
                      type="password"
                    >
                      <styled.input
                        name="password"
                        placeholder="dummy"
                        required={true}
                        type="password"
                      >
                        <StyledComponent
                          forwardedComponent={
                            Object {
                              "$$typeof": Symbol(react.forward_ref),
                              "attrs": Array [],
                              "componentStyle": ComponentStyle {
                                "componentId": "sc-htpNat",
                                "isStatic": true,
                                "lastClassName": "c5",
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
                              "styledComponentId": "sc-htpNat",
                              "target": "input",
                              "toString": [Function],
                              "warnTooManyClasses": [Function],
                              "withComponent": [Function],
                            }
                          }
                          forwardedRef={null}
                          name="password"
                          placeholder="dummy"
                          required={true}
                          type="password"
                        >
                          <input
                            className="c5"
                            name="password"
                            placeholder="dummy"
                            required={true}
                            type="password"
                          />
                        </StyledComponent>
                      </styled.input>
                    </Input>
                  </span>
                </StyledComponent>
              </styled.span>
            </div>
          </StyledComponent>
        </styled.div>
        <Button
          isCenter={true}
        >
          <styled.button
            isCenter={true}
          >
            <StyledComponent
              forwardedComponent={
                Object {
                  "$$typeof": Symbol(react.forward_ref),
                  "attrs": Array [],
                  "componentStyle": ComponentStyle {
                    "componentId": "sc-bdVaJa",
                    "isStatic": false,
                    "lastClassName": "c6",
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
              isCenter={true}
            >
              <button
                className="c6"
              >
                Login
              </button>
            </StyledComponent>
          </styled.button>
        </Button>
      </form>
    </StyledComponent>
  </styled.form>
</LoginForm>
`);
  });
});
