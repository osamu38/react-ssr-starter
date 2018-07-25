/* @flow */

import * as React from 'react';

export default function getPreloadResorceElement(content: string) {
  return (content.match(/src=".*?"/g) || [])
    .map(item => item.slice(5, -1))
    .filter((item, index, array) => array.indexOf(item) === index)
    .map(resource => (
      <link rel="preload" href={resource} as="image" key={resource} />
    ));
}
