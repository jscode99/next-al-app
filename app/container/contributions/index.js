import { useRouter } from "next/router";
import Layout from "../layout";
import Contributions from "../../component/contributions";

export default function ContributionsContainer({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
  projectAr,
  bannerImage,
}) {
  const router = useRouter();
  return (
    <Layout
      heroImage={bannerImage}
      page={"contributions"}
      pageName={"contributions"}
      projectTitle={router.locale === "en" ? projectTitle : projectAr}
      title={"contributions"}
    >
      <Contributions
        arabContributions={arabContributions}
        arabArContributions={arabArContributions}
        overallContributions={overallContributions}
        overallArContributions={overallArContributions}
      />
    </Layout>
  );
}
