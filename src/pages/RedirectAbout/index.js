/* @flow */

import * as React from 'react';
import Helmet from 'react-helmet';
import { endpoint } from 'config/url';
import type { PageProps } from 'types';

export default class RedirectAboutPage extends React.PureComponent<
  PageProps,
  *
> {
  static getRedirectUrl() {
    return endpoint.about;
  }

  render() {
    return <Helmet title="RedirectAboutPage" />;
  }
}
