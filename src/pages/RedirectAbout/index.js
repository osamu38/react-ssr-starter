/* @flow */

import loadable from 'loadable-components';
import { compose, pure, setStatic } from 'recompose';
import { endpoint } from 'config/url';

export default compose(
  setStatic('getRedirectUrl', () => endpoint.about),
  pure
)(loadable(() => import('pages/RedirectAbout/component')));
