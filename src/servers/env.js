const nodeEnv = process.env.NODE_ENV || '';
const env = nodeEnv || 'development';
const isDevelopment = env === 'development';
const isStaging = env === 'staging';
const isProduction = env === 'production';
const isServer = typeof document === 'undefined';
const isClient = !isServer;

export default {
  nodeEnv,
  env,
  isDevelopment,
  isStaging,
  isProduction,
  isServer,
  isClient,
};
