export const URI =
  process.env.NODE_ENV === "production"
    ? "https://taenlen-backend.herokuapp.com/api"
    : "http://127.0.0.1:8000/api";

export const CONFIG = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
