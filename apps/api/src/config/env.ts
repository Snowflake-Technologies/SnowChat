import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "3001",

  JWT_SECRET:
    process.env.JWT_SECRET ||
    "snowchat-dev-secret",

  DATABASE_URL:
    process.env.DATABASE_URL || ""
};
