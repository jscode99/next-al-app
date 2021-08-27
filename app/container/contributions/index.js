import Layout from "../layout";
import Contributions from "../../component/contributions";

export default function ContributionsContainer({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
  bannerImage,
}) {
  return (
    <Layout
      heroImage={bannerImage}
      page={"contributions"}
      pageName={"contributions"}
      projectTitle={projectTitle}
      title={"Contributions"}
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
