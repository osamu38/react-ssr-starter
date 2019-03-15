import React from 'react';
import StackList from 'components/StackList';
import 'jest-styled-components';

describe('<StackList />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<StackList />);

    expect(wrapper).toMatchInlineSnapshot(`
.c0 {
  margin: -8px 0 0 -8px;
}

.c1 {
  display: inline-block;
  margin: 8px 0 0 8px;
}

.c2 {
  display: inline-block;
  padding: 8px 12px;
  color: #a6c0fe;
  border: 1px #eee solid;
}

.c2:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}

<StackList>
  <styled.ul>
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
  margin: -8px 0 0 -8px;
",
            ],
          },
          "displayName": "styled.ul",
          "foldedComponentIds": Array [],
          "render": [Function],
          "styledComponentId": "sc-bdVaJa",
          "target": "ul",
          "toString": [Function],
          "warnTooManyClasses": [Function],
          "withComponent": [Function],
        }
      }
      forwardedRef={null}
    >
      <ul
        className="c0"
      >
        <styled.li
          key="0"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://preactjs.com/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://preactjs.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://preactjs.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    preact
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="1"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://reactjs.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://reactjs.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://reactjs.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    react
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="2"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://reacttraining.com/react-router/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://reacttraining.com/react-router/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://reacttraining.com/react-router/"
                    rel="noopener"
                    target="_blank"
                  >
                    react-router
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="3"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="http://gaearon.github.io/react-hot-loader/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="http://gaearon.github.io/react-hot-loader/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="http://gaearon.github.io/react-hot-loader/"
                    rel="noopener"
                    target="_blank"
                  >
                    react-hot-loader
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="4"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://redux.js.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://redux.js.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://redux.js.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    redux
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="5"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://www.styled-components.com/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://www.styled-components.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://www.styled-components.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    styled-components
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="6"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://babeljs.io/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://babeljs.io/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://babeljs.io/"
                    rel="noopener"
                    target="_blank"
                  >
                    babel
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="7"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://webpack.js.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://webpack.js.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://webpack.js.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    webpack
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="8"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://storybook.js.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://storybook.js.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://storybook.js.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    storybook
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="9"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="http://expressjs.com/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="http://expressjs.com/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="http://expressjs.com/"
                    rel="noopener"
                    target="_blank"
                  >
                    express
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="10"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://prettier.io/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://prettier.io/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://prettier.io/"
                    rel="noopener"
                    target="_blank"
                  >
                    prettier
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="11"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://eslint.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://eslint.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://eslint.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    eslint
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="12"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://stylelint.io/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://stylelint.io/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://stylelint.io/"
                    rel="noopener"
                    target="_blank"
                  >
                    stylelint
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="13"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://flow.org/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://flow.org/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://flow.org/"
                    rel="noopener"
                    target="_blank"
                  >
                    flow
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="14"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="http://airbnb.io/enzyme/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="http://airbnb.io/enzyme/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="http://airbnb.io/enzyme/"
                    rel="noopener"
                    target="_blank"
                  >
                    enzyme
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="15"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://facebook.github.io/jest/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://facebook.github.io/jest/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://facebook.github.io/jest/"
                    rel="noopener"
                    target="_blank"
                  >
                    jest
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
        <styled.li
          key="16"
        >
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
  display: inline-block;
  margin: 8px 0 0 8px;
",
                  ],
                },
                "displayName": "styled.li",
                "foldedComponentIds": Array [],
                "render": [Function],
                "styledComponentId": "sc-bwzfXH",
                "target": "li",
                "toString": [Function],
                "warnTooManyClasses": [Function],
                "withComponent": [Function],
              }
            }
            forwardedRef={null}
          >
            <li
              className="c1"
            >
              <styled.a
                href="https://developers.google.com/web/tools/workbox/"
                rel="noopener"
                target="_blank"
              >
                <StyledComponent
                  forwardedComponent={
                    Object {
                      "$$typeof": Symbol(react.forward_ref),
                      "attrs": Array [],
                      "componentStyle": ComponentStyle {
                        "componentId": "sc-htpNat",
                        "isStatic": true,
                        "lastClassName": "c2",
                        "rules": Array [
                          "
  display: inline-block;
  padding: 8px 12px;
  color: ",
                          "#a6c0fe",
                          ";
  border: 1px ",
                          "#eee",
                          " solid;
  &:hover {
    text-decoration: underline;
  }
",
                        ],
                      },
                      "displayName": "styled.a",
                      "foldedComponentIds": Array [],
                      "render": [Function],
                      "styledComponentId": "sc-htpNat",
                      "target": "a",
                      "toString": [Function],
                      "warnTooManyClasses": [Function],
                      "withComponent": [Function],
                    }
                  }
                  forwardedRef={null}
                  href="https://developers.google.com/web/tools/workbox/"
                  rel="noopener"
                  target="_blank"
                >
                  <a
                    className="c2"
                    href="https://developers.google.com/web/tools/workbox/"
                    rel="noopener"
                    target="_blank"
                  >
                    workbox
                  </a>
                </StyledComponent>
              </styled.a>
            </li>
          </StyledComponent>
        </styled.li>
      </ul>
    </StyledComponent>
  </styled.ul>
</StackList>
`);
  });
});
