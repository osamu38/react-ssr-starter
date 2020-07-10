import { isDevelopment } from 'config/env';

const getResolve = () => {
  return {
    extensions: ['.js', '.json'],
    ...(!isDevelopment
      ? {
          alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
          },
        }
      : {}),
  };
};

export default getResolve;
