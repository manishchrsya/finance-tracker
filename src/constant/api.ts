const origin = window.location.origin;

export const API_HOST = /localhost/.test(origin)
  ? "http://localhost:3004"
  : `${window.location.origin}/api`;

export const API_URL = {
  TRANSACTIONS: "transactions",
  USER: "user",
};
