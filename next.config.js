require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
    vfDomain: "demo.viafoura.com",
    vfSiteId: "233586191803414",
    vfSiteUUID: "00000000-0000-4000-8000-d47205fca416",
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
