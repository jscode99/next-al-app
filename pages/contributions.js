//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
// Language Translation Lib
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
// Container
import ContributionsContainer from "../app/container/contributions";

export default function Contributions({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("contributions")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <ContributionsContainer
        arabContributions={arabContributions}
        arabArContributions={arabArContributions}
        overallContributions={overallContributions}
        overallArContributions={overallArContributions}
        projectTitle={projectTitle}
        projectAr={projectAr}
        bannerImage={bannerImage}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let arabContributionsUrl =
    process.env.BASE_URL + process.env.PATH.ARAB_CONTRIBUTIONS;
  let arabArContributionsUrl =
    process.env.BASE_URL +
    process.env.PATH.ARAB_CONTRIBUTIONS +
    "?_locale=ar-001";
  let overallContributionsUrl =
    process.env.BASE_URL + process.env.PATH.OVERALL_CONTRIBUTIONS;
  let overallArContributionsUrl =
    process.env.BASE_URL +
    process.env.PATH.OVERALL_CONTRIBUTIONS +
    "?_locale=ar-001";
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;

  const [
    arabContributionsRes,
    arabArContributionsRes,
    overallContributionsRes,
    overallArContributionsRes,
    projectTitleRes,
    projectArRes,
    bannerImageRes,
  ] = await Promise.all([
    await fetch(arabContributionsUrl),
    await fetch(arabArContributionsUrl),
    await fetch(overallContributionsUrl),
    await fetch(overallArContributionsUrl),
    await fetch(projectTitleUrl),
    await fetch(projectTitleArUrl),
    await fetch(bannerImageUrl),
  ]);

  const [
    arabContributions,
    arabArContributions,
    overallContributions,
    overallArContributions,
    projectTitle,
    projectAr,
    bannerImage,
  ] = await Promise.all([
    await arabContributionsRes.json(),
    await arabArContributionsRes.json(),
    await overallContributionsRes.json(),
    await overallArContributionsRes.json(),
    await projectTitleRes.json(),
    await projectArRes.json(),
    await bannerImageRes.json(),
  ]);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      arabContributions,
      arabArContributions,
      overallContributions,
      overallArContributions,
      projectTitle,
      projectAr,
      bannerImage,
    },
    revalidate: 10,
  };
}
