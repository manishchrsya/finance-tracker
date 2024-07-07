const origin = window.location.origin;

export const API_HOST = /localhost/.test(origin)
  ? "http://localhost:3004"
  : `https://json-server-vercel-olive-iota.vercel.app`;

export const API_URL = {
  TRANSACTIONS: "transactions",
  USER: "user",
};
