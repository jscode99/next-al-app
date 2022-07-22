const path = require("path");
const { i18n } = require("./i18n");

// const localeSubpaths = {
//   ar: "ar",
// };

module.exports = {
  i18n,
  env: {
    BASE_URL: "https://alaqsafund-api.isdb.org",
    FLOW_CONTACT_URL:"https://prod-29.westeurope.logic.azure.com:443/workflows/8db9c3b85c7c464ea6367cb5803d0961/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=yLQJQRq-uIvVk40mPEp_CV6pUcmJB_EgGjI4wBy30tI",
    PATH: {
      STATIC_SITE: "/static-stites",
      ISDB_MANAGES: "/isdb-manages",
      BANNER_IMAGE: "/banner-images",
      ARAB_CONTRIBUTIONS: "/arab-contributions",
      OVERALL_CONTRIBUTIONS: "/overall-contributions",
      PROJECT_TITLE: "/project-titles",
      PROJECT_DATA: "/projects",
      SECTOR_ALLOCATION: "/sector-allocations",
      PUBLICATION: "/publications",
      SUCCESS_STORIES: "/success-stories",
      SUCCESS_STORIES_MEDIA: "/success-stories-medias",
      CONTACT_US: "/contact-uses",
      MEMBERS: "/members",
      FLAG: "/flags",
      AL_AQSA_FUND: "/aqsa-funds",
      ARAB_FUND: "/arab-funds",
      YEARLY_APPROVAL: "/yearly-approvals",
      PROJECT_RESERVE: "/reserves",
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["alaqsafund-api.isdb.org"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
