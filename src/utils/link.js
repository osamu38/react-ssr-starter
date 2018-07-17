/* @flow */

import { origin, endpoint } from 'config/url';

class Link {
  constructor() {
    this.link = {
      manifest: '/manifest.json',
      canonical: origin,
      'shortcut icon': '/favicon.ico',
      'apple-touch-icon': '',
      'apple-touch-icon-precomposed': '',
    };
  }

  link: Object;

  get(pathname: string) {
    if (pathname !== endpoint.landing) {
      this.merge({
        canonical: origin + pathname,
      });
    }
    return this.parse(this.link);
  }

  merge(config: Object = {}) {
    this.link = {
      ...this.link,
      ...config,
    };
  }

  parse(config: Object): { rel: string, href: string }[] {
    return Object.keys(config).map((key: string) => ({
      rel: key,
      href: config[key],
    }));
  }
}

export default new Link();
