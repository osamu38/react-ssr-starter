import { css } from 'styled-components';
import { devices } from 'styles/variables';

export default Object.keys(devices).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${devices[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
