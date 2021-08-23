//Style
import style from "./index.module.sass";

export default function ProposalSection() {
  return (
    <>
      <div className={`${style.container}`}>
        <div className={`${style.proposal_container} shadow my-5`}>
          <div className={`p-5`}>
            <h3 className={`text-center w-100`}>Proposal Selection Criteria</h3>
            <hr className={`${style.proposal_under_line} my-3`} />
            <p>
              The criteria for evaluating project proposals were developed in a
              way that ensures the financing of projects that are consistent
              with the Palestinian national development plans that are highly
              sustainable and have the greatest impact on the Palestinian people
              as possible. It also takes into account projects that have
              financing opportunities from other parties, in order to give the
              largest number of projects the opportunity to access financing
              through the Al-Aqsa Fund. The criteria were also developed in a
              way that gives equal opportunities to the proposals of small
              projects in terms of the size of the proposed budget or
              geographical coverage. The criteria also took into account the
              impact of the project on the livelihood outcomes of the target
              groups, employment, and national priorities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
