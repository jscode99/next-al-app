import { useRouter } from "next/router";
import Layout from "../layout";
import Contact from "../../component/contact";

export default function ContactContainer({
  staticSite,
  staticSiteAr,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"contact"}
      pageName={"contact"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"get in touch"}
    >
      <Contact staticSite={staticSite} staticSiteAr={staticSiteAr} />
    </Layout>
  );
}
