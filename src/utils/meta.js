/* @flow */

import { colors } from 'styles/variables';
import { endpoint } from 'config/url';

class Meta {
  constructor() {
    this.meta = {
      viewport:
        'width=device-width,initial-scale=1.0,minimum-scale=1.0,shrink-to-fit=no,viewport-fit=cover',
      description: 'All have been introduced React environment',
      'theme-color': colors.accent,
      'format-detection': 'telephone=no',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'react-ssr-starter',
      'google-site-verification': '',
      'fb:app_id': '',
      'og:title': 'react-ssr-starter',
      'og:type': '',
      'og:description': 'All have been introduced React environment',
      'og:url': '',
      'og:image': '',
      'og:site_name': '',
      'og:locale': 'ja_JP',
      'twitter:card': '',
      'twitter:site': '',
      'twitter:title': 'react-ssr-starter',
      'twitter:description': 'All have been introduced React environment',
      'twitter:image': '',
    };
  }

  meta: Object;

  get(pathname: string) {
    if (pathname === endpoint.about) {
      this.merge({
        description: 'This is about page',
        'og:description': 'This is about page',
        'twitter:description': 'This is about page',
      });
    }
    return this.parse(this.meta);
  }

  merge(config: Object = {}) {
    this.meta = {
      ...this.meta,
      ...config,
    };
  }

  parse(config: Object) {
    const defaultParsedMeta = [
      { charset: 'utf-8' },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1',
      },
    ];
    const parsedMeta = Object.keys(config).map(key => ({
      name: key,
      [key.includes('og:') || key === 'fb:app_id'
        ? 'property'
        : 'content']: config[key],
    }));

    return [...defaultParsedMeta, ...parsedMeta];
  }
}

export default new Meta();
