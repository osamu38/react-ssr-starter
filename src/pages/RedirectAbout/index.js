/* @flow */

import loadable from 'loadable-components';
import { compose, setStatic } from 'recompose';
import { endpoint } from 'config/url';

export default compose(setStatic('getRedirectUrl', () => endpoint.about))(
  loadable(() => import('pages/RedirectAbout/component'))
);
