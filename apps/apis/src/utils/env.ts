import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

const ENV_Loader = {
  DB: process.env.DB,
};

export const ENV = Object.freeze(ENV_Loader);
