import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n";
//Constants
import { CONST } from "../app/services/constants";
//Services
import { fetchService } from "../app/services/fetchService";
import ContactContainer from "../app/container/contact";

export default function Contact({ projectTitle }) {
  return <ContactContainer projectTitle={projectTitle} />;
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
