require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
    vfDomain: process.env.VF_DOMAIN,
    vfSiteId: process.env.VF_SITE_ID,
    vfSiteUUID: process.env.VF_SITE_UUID,
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
