import React from "react";
import SitemapContainer from "../app/container/sitemap";
import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";

export default function Sitemap({ projectTitle, projectAr, bannerImage }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return router.locale === "en" ? (
    <>
      <Helmet>
        <title>{t("Sitemap")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <SitemapContainer projectTitle={projectTitle} bannerImage={bannerImage} />
    </>
  ) : (
    <>
      <Helmet>
        <title>{t("Sitemap")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <SitemapContainer projectTitle={projectAr} bannerImage={bannerImage} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const [projectTitleRes, projectArRes, bannerImageRes] = await Promise.all([
    await axios.get(projectTitleUrl, { httpAgent }),
    await axios.get(projectTitleArUrl, { httpAgent }),
    await axios.get(bannerImageUrl, { httpAgent }),
  ]);

  const [projectTitle, projectAr, bannerImage] = await Promise.all([
    await projectTitleRes.data,
    await projectArRes.data,
    await bannerImageRes.data,
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
