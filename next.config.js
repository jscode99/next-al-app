const path = require("path");
const { i18n } = require("./i18n");

// const localeSubpaths = {
//   ar: "ar",
// };

module.exports = {
  i18n,
  env: {
    BASE_URL: "https://z966c6ddc-z1680a652-gtw.qovery.io",
    PATH: {
      ARAB_CONTRIBUTIONS: "/arab-contributions",
      OVERALL_CONTRIBUTIONS: "/overall-contributions",
      PROJECT_TITLE: "/project-titles",
      PROJECT_DATA: "/projects",
      SECTOR_ALLOCATION: "/sector-allocations",
      PUBLICATION: "/publications",
      SUCCESS_STORIES: "/success-stories",
      CONTACT_US: "/contact-uses",
    },
  },
  reactStrictMode: true,
  images: {
    domains: ["z966c6ddc-z1680a652-gtw.qovery.io"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
