import { config } from 'dotenv';


config({
  path: './.env',
});

export const mongoDB = {
  uri: process.env.DB_URI,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};
