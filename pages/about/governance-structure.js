//Constant
import { CONST } from "../../app/services/constants";
//Services
import { fetchService } from "../../app/services/fetchService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n";
import GovernanceContainer from "../../app/container/about/Governance";

export default function Governance({ projectTitle }) {
  return <GovernanceContainer projectTitle={projectTitle} />;
}
export async function getStaticProps({ locale }) {
  let projectTitleUrl = process.env.BASE_URL + process.env.PATH.PROJECT_TITLE;
  const [projectTitle] = await Promise.all([
    await fetchService(projectTitleUrl, CONST.API_METHOD.GET),
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18NextConfig)),

      projectTitle,
    },
    revalidate: 10,
  };
}
