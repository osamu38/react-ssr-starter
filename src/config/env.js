export const nodeEnv = process.env.NODE_ENV || '';
export const env = nodeEnv || 'development';
export const isDevelopment = env === 'development';
export const isStaging = env === 'staging';
export const isProduction = env === 'production';
export const isServer = typeof document === 'undefined';
export const isClient = !isServer;
