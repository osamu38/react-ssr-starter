import React from 'react';

const getPreloadResorceElement = (content, styleTags) => {
  const resourcesFromImageTag = (
    content.match(/src=".*?"/g) || []
  ).map((item) => item.slice(5, -1));
  const resourcesFromBackgroundImage = (
    styleTags.match(/url\(.*?\)/g) || []
  ).map((item) =>
    item.includes('"') || item.includes("'")
      ? item.slice(5, -2)
      : item.slice(4, -1)
  );
  const totalResources = [
    ...resourcesFromImageTag,
    ...resourcesFromBackgroundImage,
  ];

  return totalResources
    .filter((item, index, array) => array.indexOf(item) === index)
    .map((resource) => (
      <link rel="preload" as="image" href={resource} key={resource} />
    ));
};

export default getPreloadResorceElement;
