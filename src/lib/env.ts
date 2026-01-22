export const ENV = {
  cookieSecret: process.env.COOKIE_SECRET || "dev-secret-change-in-production",
  isProduction: process.env.NODE_ENV === "production",
};
