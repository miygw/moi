export const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'production';
    case 'development':
      return 'development';
    default:
      throw new Error(`未対応のNODE_ENV [${process.env.NODE_ENV}] だった。`);
  }
};
export const isDevelopment = () => getEnv() === 'development';
export const isClient = () => process.browser;
