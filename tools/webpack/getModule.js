import { joinPath } from 'utils/path';

const getModule = () => {
  return {
    rules: [
      {
        test: /\.js$/,
        include: joinPath('src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.json$/,
        include: joinPath('src'),
        exclude: /node_modules/,
        use: {
          loader: 'json-loader',
        },
      },
    ],
  };
};

export default getModule;
