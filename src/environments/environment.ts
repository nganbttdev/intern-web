export const environment = {
  production: true,
  AUTH_SERVICE: (window as any).ENV?.AUTH_SERVICE,

  APP_VERSION: (window as any).ENV?.APP_VERSION,
  BUILD_TIME: (window as any).ENV?.BUILD_TIME,
};
