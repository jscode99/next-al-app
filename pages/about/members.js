import { useRouter } from "next/router";
import axios from "axios";
import https from "https";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import { useTranslation } from "next-i18next";
import { Helmet } from "react-helmet";
//Container
import MembersContainer from "../../app/container/about/Members";

export default function Members({
  projectTitle,
  projectAr,
  bannerImage,
  members,
  membersAr,
  flag,
}) {
  let router = useRouter();
  const { t } = useTranslation("common");

  return router.locale === "en" ? (
    <>
      <Helmet>
        <title>{t("members")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <MembersContainer
        projectTitle={projectTitle}
        members={members}
        flag={flag}
        bannerImage={bannerImage}
      />
    </>
  ) : (
    <>
      <Helmet>
        <title>{t("members")}</title>
        <meta property="og:title" content={t("al aqsa fund")} />
        <meta property="og:image" content={"/images/common/alAqsaHead.png"} />
      </Helmet>
      <MembersContainer
        projectTitle={projectAr}
        members={membersAr}
        flag={flag}
        bannerImage={bannerImage}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  let projectTitleArUrl =
    process.env.BASE_URL + process.env.PATH.PROJECT_TITLE + "?_locale=ar-001";
  let bannerImageUrl = process.env.BASE_URL + process.env.PATH.BANNER_IMAGE;
  let membersUrl = process.env.BASE_URL + process.env.PATH.MEMBERS;
  let membersArUrl =
    process.env.BASE_URL + process.env.PATH.MEMBERS + "?_locale=ar-001";
  let flagUrl = process.env.BASE_URL + process.env.PATH.FLAG;

  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  const [
    projectTitleRes,
    projectArRes,
    bannerImageRes,
    membersRes,
    membersArRes,
    flagRes,
  ] = await Promise.all([
    await axios.get(projectTitleUrl, { httpAgent }),
    await axios.get(projectTitleArUrl, { httpAgent }),
    await axios.get(bannerImageUrl, { httpAgent }),
    await axios.get(membersUrl, { httpAgent }),
    await axios.get(membersArUrl, { httpAgent }),
    await axios.get(flagUrl, { httpAgent }),
  ]).catch(function (error) {
    console.log("Error: " + error);
  });

  const [projectTitle, projectAr, bannerImage, members, membersAr, flag] =
    await Promise.all([
      await projectTitleRes.data,
      await projectArRes.data,
      await bannerImageRes.data,
      await membersRes.data,
      await membersArRes.data,
      await flagRes.data,
    ]).catch(function (error) {
      console.log("Error: " + error);
    });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),
      projectTitle,
      projectAr,
      bannerImage,
      members,
      membersAr,
      flag,
    },
    revalidate: 10,
  };
}
