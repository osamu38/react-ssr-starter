import { devices } from 'styles/variables';

export default Object.keys(devices).reduce(
  (pre, cur) => ({
    ...pre,
    [cur]: `@media (max-width: ${devices[cur]}px)`,
  }),
  {}
);
