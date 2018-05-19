/* @flow */

import loadable from 'loadable-components';
import { compose, pure, setStatic } from 'recompose';
import url from 'config/url';

export default compose(
  setStatic('getRedirectUrl', () => url.endpoint.about),
  pure
)(loadable(() => import('pages/RedirectAbout/RedirectAbout')));
