import { useRouter } from "next/router";
//Components
import Approval from "./apporval";
import Selection from "./selection";
import ProposalSection from "./proposalSection";
import ProposalCard from "./proposalCards";

export default function ApprovalProcess({ staticSite, staticSiteAr }) {
  const router = useRouter();
  return (
    <>
      {router.locale === "en"
        ? staticSite[0].static.about_selectionProcess_implementationProcess
            .length > 0 && (
            <Approval
              data={
                staticSite[0].static
                  .about_selectionProcess_implementationProcess
              }
            />
          )
        : staticSiteAr[0].static.about_selectionProcess_implementationProcess
            .length > 0 && (
            <Approval
              data={
                staticSiteAr[0].static
                  .about_selectionProcess_implementationProcess
              }
            />
          )}
      {router.locale === "en"
        ? staticSite[0].static.about_selectionProcess_initiationProcess.length >
            0 && (
            <Selection
              data={
                staticSite[0].static.about_selectionProcess_initiationProcess
              }
            />
          )
        : staticSiteAr[0].static.about_selectionProcess_initiationProcess
            .length > 0 && (
            <Selection
              data={
                staticSiteAr[0].static.about_selectionProcess_initiationProcess
              }
            />
          )}
      {router.locale === "en"
        ? Object.keys(
            staticSite[0].static
              .about_selectionProcess_proposalSelectionCriteria,
          ).length > 0 && (
            <ProposalSection
              data={
                staticSite[0].static
                  .about_selectionProcess_proposalSelectionCriteria
              }
            />
          )
        : Object.keys(
            staticSiteAr[0].static
              .about_selectionProcess_proposalSelectionCriteria,
          ).length > 0 && (
            <ProposalSection
              data={
                staticSiteAr[0].static
                  .about_selectionProcess_proposalSelectionCriteria
              }
            />
          )}
      {router.locale === "en"
        ? staticSite[0].static.about_selectionProcess_criteria.length > 0 && (
            <ProposalCard
              data={staticSite[0].static.about_selectionProcess_criteria}
            />
          )
        : staticSiteAr[0].static.about_selectionProcess_criteria.length > 0 && (
            <ProposalCard
              data={staticSiteAr[0].static.about_selectionProcess_criteria}
            />
          )}
    </>
  );
}
