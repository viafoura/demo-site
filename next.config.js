require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
