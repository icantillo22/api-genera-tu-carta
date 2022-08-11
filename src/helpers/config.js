import { config } from "dotenv";
config();

export default {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_BASE_PATH: process.env.AWS_BASE_PATH,
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET || 'MyScr3tK3y',
};