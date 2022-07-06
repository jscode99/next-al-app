import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
//Antd
import { Row, Col } from "antd";
//Components
import MembersList from "./membersList";
//Style
import style from "./index.module.sass";

export default function Members({ members, flag }) {
  // console.log("members", members);
  // console.log("flag", flag);
  const [activeData, setActiveData] = useState(true);
  const [buttonActive, setButtonActive] = useState(true);
  const [supremeMembersList, setSupremeMembersList] = useState([]);
  const [managementMembersList, setManagementMembersList] = useState([]);

  let router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    let resultMem = [];
    if (members.length > 0 && flag.length > 0) {
      for (let index = 0; index < members.length; index++) {
        // let url = null;
        // for (let innerIndex = 0; innerIndex < flag.length; innerIndex++) {
        //   if (
        //     members[index].country.toLowerCase() ===
        //     flag[innerIndex].Country.toLowerCase()
        //   ) {
        //     url = flag[innerIndex].Flag[0].url;
        //   }
        // }
        resultMem.push({
          title: members[index].title,
          label: members[index].label,
          reputation: members[index].reputation,
          type: members[index].type,
          priority: members[index].Priority,
        });
      }
    }
    if (resultMem.length > 0) {
      let SCMembers = resultMem.filter(
        (membersData) => membersData.type.toLowerCase() === "supreme council"
      );
      let CMMembers = resultMem.filter(
        (membersData) =>
          membersData.type.toLowerCase() === "management committee"
      );
      // console.log("SCMembers", SCMembers);
      setSupremeMembersList(SCMembers);
      // console.log("CMMembers", CMMembers);
      setManagementMembersList(CMMembers);
      // console.log("resultMem", resultMem);
    }
  }, [members, flag]);

  return (
    <div className={`${style.container_bg} pb-4`}>
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div className={`${style.container} px-5`}>
            {router.locale === "en" ? (
              <div className={`d-flex justify-content-center my-3`}>
                <div
                  className={`${style.member_intro_button} me-2`}
                  onClick={() => {
                    setActiveData(true);
                  }}
                >
                  <p
                    className={`px-2 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    } text-capitalize ${
                      activeData === true ? style.selected : ``
                    }`}
                  >
                    {t("supreme council")}
                  </p>
                </div>
                <div
                  className={`${style.member_intro_button}`}
                  onClick={() => {
                    setActiveData(false);
                  }}
                >
                  <p
                    className={`text-capitalize px-2 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    } ${activeData === false ? style.selected : ``}`}
                  >
                    {t("management committee")}
                  </p>
                </div>
              </div>
            ) : (
              <div className={`d-flex justify-content-center my-5`}>
                <div
                  className={`${style.member_intro_button} me-2`}
                  onClick={() => {
                    setActiveData(false);
                  }}
                >
                  <p
                    className={`text-capitalize px-2 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    }  ${activeData === false ? style.selected : ``}`}
                  >
                    {t("management committee")}
                  </p>
                </div>
                <div
                  className={`${style.member_intro_button}`}
                  onClick={() => {
                    setActiveData(true);
                  }}
                >
                  <p
                    className={`text-capitalize px-2 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    }  ${activeData === true ? style.selected : ``}`}
                  >
                    {t("supreme council")}
                  </p>
                </div>
              </div>
            )}
            {activeData === true
              ? supremeMembersList
                  .sort((a, b) => a.priority - b.priority)
                  .map((data, index) => <MembersList key={index} data={data} />)
              : managementMembersList
                  .sort((a, b) => a.priority - b.priority)
                  .map((data, index) => (
                    <MembersList key={index} data={data} />
                  ))}
          </div>
        </Col>
        <Col xs={24} sm={24} md={0} lg={0} xl={0}>
          <div className={`${style.container} px-3`}>
            {router.locale === "en" ? (
              <div
                className={`d-flex justify-content-start overflow-auto my-3`}
              >
                <div
                  className={`${style.member_intro_button} me-2`}
                  onClick={() => {
                    setActiveData(true);
                  }}
                >
                  <p
                    className={`text-capitalize px-4 py-2 m-0 ${
                      style.member_intro_button_title
                    } ${activeData === true ? style.selected : ``}`}
                  >
                    {t("supreme council")}
                  </p>
                </div>
                <div
                  className={`${style.member_intro_button}`}
                  onClick={() => {
                    setActiveData(false);
                  }}
                >
                  <p
                    className={`text-capitalize px-4 py-2 m-0 ${
                      style.member_intro_button_title
                    } ${style.member_intro_button_title} ${
                      activeData === false ? style.selected : ``
                    }`}
                  >
                    {t("management committee")}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className={`d-flex justify-content-start overflow-auto my-5`}
              >
                <div
                  className={`${style.member_intro_button} me-2`}
                  onClick={() => {
                    setActiveData(false);
                  }}
                >
                  <p
                    className={`text-capitalize px-4 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    }  ${activeData === false ? style.selected : ``}`}
                  >
                    {t("management committee")}
                  </p>
                </div>
                <div
                  className={`${style.member_intro_button}`}
                  onClick={() => {
                    setActiveData(true);
                  }}
                >
                  <p
                    className={`text-capitalize px-4 py-2 m-0 ${
                      router.locale === "en"
                        ? style.member_intro_button_title
                        : style.member_intro_button_title_ar
                    }  ${activeData === true ? style.selected : ``}`}
                  >
                    {t("supreme council")}
                  </p>
                </div>
              </div>
            )}
            {activeData === true
              ? supremeMembersList
                  .sort((a, b) => a.priority - b.priority)
                  .map((data, index) => <MembersList key={index} data={data} />)
              : managementMembersList
                  .sort((a, b) => a.priority - b.priority)
                  .map((data, index) => (
                    <MembersList key={index} data={data} />
                  ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}
