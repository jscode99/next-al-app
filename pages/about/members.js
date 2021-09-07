import { useRouter } from "next/router";
//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
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
  return router.locale === "en" ? (
    <MembersContainer
      projectTitle={projectTitle}
      members={members}
      flag={flag}
      bannerImage={bannerImage}
    />
  ) : (
    <MembersContainer
      projectTitle={projectAr}
      members={membersAr}
      flag={flag}
      bannerImage={bannerImage}
    />
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

  const [projectTitle, projectAr, bannerImage, members, membersAr, flag] =
    await Promise.all([
      await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
      await fetchService(projectTitleArUrl, CONST.API_METHOD.GET),
      await fetchService(bannerImageUrl, CONST.API_METHOD.GET),
      await fetchService(membersUrl, CONST.API_METHOD.GET),
      await fetchService(membersArUrl, CONST.API_METHOD.GET),
      await fetchService(flagUrl, CONST.API_METHOD.GET),
    ]);
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
