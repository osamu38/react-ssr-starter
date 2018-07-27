import React from 'react';
import OctIcon from 'components/OctIcon';
import 'jest-styled-components';

describe('<OctIcon />', () => {
  it('render snapshots', () => {
    const wrapper = mount(<OctIcon>OctIcon</OctIcon>);

    expect(wrapper).toMatchInlineSnapshot(`
<OctIcon>
  <a
    href="https://github.com/osamu38/react-ssr-starter"
    rel="noopener noreferrer"
    target="_blank"
  >
    <img
      alt="oct-icon"
      src="/static/images/svg/oct-icon.svg"
    />
  </a>
</OctIcon>
`);
  });
});
