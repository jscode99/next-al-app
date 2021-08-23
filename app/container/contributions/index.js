import Layout from "../layout";
import Contributions from "../../component/contributions";

export default function ContributionsContainer({
  arabContributions,
  arabArContributions,
  overallContributions,
  overallArContributions,
  projectTitle,
}) {
  return (
    <Layout
      heroImage={"/IsDB-Banner-Image.webp"}
      page={"contributions"}
      pageName={"contributions"}
      projectTitle={projectTitle}
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
