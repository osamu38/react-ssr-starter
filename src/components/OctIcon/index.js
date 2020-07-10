import React from 'react';

const OctIcon = (props) => {
  const { className } = props;

  return (
    <a
      href="https://github.com/osamu38/react-ssr-starter"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <img src="/static/images/svg/oct-icon.svg" alt="oct-icon" />
    </a>
  );
};

export default OctIcon;
