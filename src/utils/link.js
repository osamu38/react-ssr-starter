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

  get(pathname) {
    if (pathname !== endpoint.home) {
      this.merge({
        canonical: origin + pathname,
      });
    }
    return this.parse(this.link);
  }

  merge(config = {}) {
    this.link = {
      ...this.link,
      ...config,
    };
  }

  parse(config) {
    return Object.keys(config).map((key) => ({
      rel: key,
      href: config[key],
    }));
  }
}

export default new Link();
