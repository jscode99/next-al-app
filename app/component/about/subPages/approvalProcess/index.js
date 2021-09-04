import { useRouter } from "next/router";
//Components
import Approval from "./apporval";
import Selection from "./selection";
import ProposalSection from "./proposalSection";
import ProposalCard from "./proposalCards";
//Style
import style from "./index.module.sass";
import router from "next/router";

export default function ApprovalProcess({ staticSite }) {
  console.log("STATIC ===== ", staticSite);
  const router = useRouter();
  return (
    <>
      {staticSite[0].static.about_selectionProcess_implementationProcess
        .length > 0 && (
        <Approval
          data={
            staticSite[0].static.about_selectionProcess_implementationProcess
          }
        />
      )}
      {staticSite[0].static.about_selectionProcess_initiationProcess.length >
        0 && (
        <Selection
          data={staticSite[0].static.about_selectionProcess_initiationProcess}
        />
      )}
      {Object.keys(
        staticSite[0].static.about_selectionProcess_proposalSelectionCriteria,
      ).length > 0 && (
        <ProposalSection
          data={
            staticSite[0].static
              .about_selectionProcess_proposalSelectionCriteria
          }
        />
      )}
      {staticSite[0].static.about_selectionProcess_criteria.length > 0 && (
        <ProposalCard
          data={staticSite[0].static.about_selectionProcess_criteria}
        />
      )}
    </>
  );
}
