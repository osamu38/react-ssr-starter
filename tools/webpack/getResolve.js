import { isDevelopment } from 'servers/env';

export default function getResolve() {
  return {
    extensions: ['.js', '.json'],
    ...(!isDevelopment
      ? {
          alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
          },
        }
      : {}),
  };
}
