import React from "react";
import PolicyContainer from "../app/container/policy";
import { useRouter } from "next/router";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";

export default function Policy({ projectTitle, projectAr, bannerImage }) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return router.locale === "en" ? (
    <>
      <Helmet>
        <title>{t("policy")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <PolicyContainer projectTitle={projectTitle} bannerImage={bannerImage} />
    </>
  ) : (
    <>
      <Helmet>
        <title>{t("policy")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <PolicyContainer projectTitle={projectAr} bannerImage={bannerImage} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  const [projectTitle, projectAr, bannerImage] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
    await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
    await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
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
