const path = require("path");
const { i18n } = require("./i18n");

// const localeSubpaths = {
//   ar: "ar",
// };

module.exports = {
  i18n,
  env: {
    // DOMAIN: "al-aqsa-testing.vercel.app",
    BASE_URL: "https://alaqsafunduat-api.isdb.org",
    // "https://z24eee497-ze87c794b-gtw.qovery.io" /* "https://z966c6ddc-z1680a652-gtw.qovery.io" */,
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
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["alaqsafunduat-api.isdb.org"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
