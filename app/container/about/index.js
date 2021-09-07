import { useRouter } from "next/router";
import Layout from "../layout";
import About from "../../component/about";

export default function AboutContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
  flag,
  flagAr,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"about"}
      pageName={"about"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"al aqsa fund"}
    >
      <About
        staticSite={staticSite}
        staticSiteAr={staticSiteAr}
        flag={flag}
        flagAr={flagAr}
      />
    </Layout>
  );
}
