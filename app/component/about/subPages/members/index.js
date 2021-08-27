import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
        let url = null;
        for (let innerIndex = 0; innerIndex < flag.length; innerIndex++) {
          if (
            members[index].country.toLowerCase() ===
            flag[innerIndex].Country.toLowerCase()
          ) {
            url = flag[innerIndex].Flag[0].url;
          }
        }
        resultMem.push({
          title: members[index].title,
          label: members[index].label,
          reputation: members[index].reputation,
          type: members[index].type,
          url: url,
        });
      }
    }
    if (resultMem.length > 0) {
      let SCMembers = resultMem.filter(
        membersData => membersData.type.toLowerCase() === "supreme council",
      );
      let CMMembers = resultMem.filter(
        membersData =>
          membersData.type.toLowerCase() === "management committee",
      );
      // console.log("SCMembers", SCMembers);
      setSupremeMembersList(SCMembers);
      // console.log("CMMembers", CMMembers);
      setManagementMembersList(CMMembers);
      // console.log("resultMem", resultMem);
    }
  }, [members, flag]);

  // const supremeMembersList = [
  //   {
  //     title: "His Excellency Mr. Ayman bin Abdul Rahman(S)",
  //     label: "Minister of Finance - People’s Democratic Republic of Algeria",
  //     reputation: "Chairman of the Board",
  //     url: "/images/about/flags/Algeria.webp",
  //   },
  //   {
  //     title: "His Excellency Mr. Muhammad bin Abdullah Al-Jadaan(S)",
  //     label: "Minister of Finance - Kingdom of Saudi Arabia",
  //     reputation: "Vice President",
  //     url: "/images/about/flags/Saudi.webp",
  //   },
  //   {
  //     title: "His Excellency Dr. Muhammad Al-Asses(S)",
  //     label: "Minister of Finance - The Hashemite Kingdom of Jordan",
  //     reputation: "Member (1)",
  //     url: "/images/about/flags/Jordan.webp",
  //   },
  //   {
  //     title: "His Excellency Mr. Obaid Humaid Al Tayer(S)",
  //     label: "Minister of State for Financial Affairs - United Arab Emirates",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Sheikh / Salman bin Khalifa Al Khalifa(S)",
  //     label: "Minister of Finance and National Economy - Kingdom of Bahrain",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Gabriel Ibrahim(S)",
  //     label: "Minister of Finance and National Economy - Republic of Sudan",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Sultan bin Salem bin Saeed Al Habsi(S)",
  //     label: "Minister Responsible for Financial Affairs - Sultanate of Oman",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Shukry Bishara(S)",
  //     label: "Minister of Finance - State of Palestine",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Ali Sharif Al-Emadi(S)",
  //     label: "Minister of Economy and Finance - State of Qatar",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Professor / Khalifa Assistant Hamada(S)",
  //     label: "Minister of Finance - State of Kuwait",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Mohammed Bin Shaaboun(S)",
  //     label: "Minister of Economy and Finance - Kingdom of Morocco",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Muhammad Maait(S)",
  //     label: "Minister of Finance - Arab Republic of Egypt",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Salem Saleh Salem Bin Buraik(S)",
  //     label: "Minister of Finance - Republic of Yemen",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Ahmed Aboul Gheit(S)",
  //     label: "Secretary General of the League of Arab States",
  //     reputation: "Member",
  //   },
  // ];

  // const managementMembersList = [
  //   {
  //     title: "His Excellency Mr. Ayman bin Abdul Rahman(M)",
  //     label: "Minister of Finance - People’s Democratic Republic of Algeria",
  //     reputation: "Chairman of the Board",
  //     url: "/images/about/flags/Algeria.webp",
  //   },
  //   {
  //     title: "His Excellency Mr. Muhammad bin Abdullah Al-Jadaan(M)",
  //     label: "Minister of Finance - Kingdom of Saudi Arabia",
  //     reputation: "Vice President",
  //     url: "/images/about/flags/Saudi.webp",
  //   },
  //   {
  //     title: "His Excellency Dr. Muhammad Al-Asses(M)",
  //     label: "Minister of Finance - The Hashemite Kingdom of Jordan",
  //     reputation: "Member (1)",
  //     url: "/images/about/flags/Jordan.webp",
  //   },
  //   {
  //     title: "His Excellency Mr. Obaid Humaid Al Tayer(M)",
  //     label: "Minister of State for Financial Affairs - United Arab Emirates",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Sheikh / Salman bin Khalifa Al Khalifa(M)",
  //     label: "Minister of Finance and National Economy - Kingdom of Bahrain",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Gabriel Ibrahim(M)",
  //     label: "Minister of Finance and National Economy - Republic of Sudan",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Sultan bin Salem bin Saeed Al Habsi(M)",
  //     label: "Minister Responsible for Financial Affairs - Sultanate of Oman",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Shukry Bishara(M)",
  //     label: "Minister of Finance - State of Palestine",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Ali Sharif Al-Emadi(M)",
  //     label: "Minister of Economy and Finance - State of Qatar",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Professor / Khalifa Assistant Hamada(M)",
  //     label: "Minister of Finance - State of Kuwait",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Mohammed Bin Shaaboun(M)",
  //     label: "Minister of Economy and Finance - Kingdom of Morocco",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Dr. Muhammad Maait(M)",
  //     label: "Minister of Finance - Arab Republic of Egypt",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Salem Saleh Salem Bin Buraik(M)",
  //     label: "Minister of Finance - Republic of Yemen",
  //     reputation: "Member",
  //   },
  //   {
  //     title: "His Excellency Mr. Ahmed Aboul Gheit(M)",
  //     label: "Secretary General of the League of Arab States",
  //     reputation: "Member",
  //   },
  // ];
  return (
    <div className={`${style.container_bg} pb-4`}>
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
                className={`px-4 py-2 m-0 ${style.member_intro_button_title} ${
                  activeData === true ? style.selected : ``
                }`}
              >
                Supreme council
              </p>
            </div>
            <div
              className={`${style.member_intro_button}`}
              onClick={() => {
                setActiveData(false);
              }}
            >
              <p
                className={`px-4 py-2 m-0 ${style.member_intro_button_title} ${
                  style.member_intro_button_title
                } ${activeData === false ? style.selected : ``}`}
              >
                Management Committee
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
                className={`px-4 py-2 m-0 ${style.member_intro_button_title} ${
                  style.member_intro_button_title
                } ${activeData === false ? style.selected : ``}`}
              >
                {t("Management Committee")}
              </p>
            </div>
            <div
              className={`${style.member_intro_button}`}
              onClick={() => {
                setActiveData(true);
              }}
            >
              <p
                className={`px-4 py-2 m-0 ${style.member_intro_button_title} ${
                  style.member_intro_button_title
                } ${activeData === true ? style.selected : ``}`}
              >
                {t("Supreme Council")}
              </p>
            </div>
          </div>
        )}
        {activeData === true
          ? supremeMembersList.map((data, index) => (
              <MembersList key={index} data={data} />
            ))
          : managementMembersList.map((data, index) => (
              <MembersList key={index} data={data} />
            ))}
      </div>
    </div>
  );
}
