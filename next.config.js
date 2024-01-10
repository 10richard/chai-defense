/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  },
};

module.exports = nextConfig;
