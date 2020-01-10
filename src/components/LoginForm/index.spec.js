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
          <form
            className="c0"
            onSubmit={[Function]}
          >
            <styled.div>
              <div
                className="c1"
              >
                <styled.span>
                  <span
                    className="c2"
                  >
                    <Label>
                      <styled.span>
                        <span
                          className="c3"
                        >
                          Email
                        </span>
                      </styled.span>
                    </Label>
                  </span>
                </styled.span>
                <styled.span>
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
                        <input
                          className="c5"
                          name="email"
                          placeholder="dummy@dummy.com"
                          required={true}
                          type="email"
                        />
                      </styled.input>
                    </Input>
                  </span>
                </styled.span>
              </div>
            </styled.div>
            <styled.div>
              <div
                className="c1"
              >
                <styled.span>
                  <span
                    className="c2"
                  >
                    <Label>
                      <styled.span>
                        <span
                          className="c3"
                        >
                          Password
                        </span>
                      </styled.span>
                    </Label>
                  </span>
                </styled.span>
                <styled.span>
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
                        <input
                          className="c5"
                          name="password"
                          placeholder="dummy"
                          required={true}
                          type="password"
                        />
                      </styled.input>
                    </Input>
                  </span>
                </styled.span>
              </div>
            </styled.div>
            <Button
              isCenter={true}
            >
              <styled.button
                isCenter={true}
              >
                <button
                  className="c6"
                >
                  Login
                </button>
              </styled.button>
            </Button>
          </form>
        </styled.form>
      </LoginForm>
    `);
  });
});
