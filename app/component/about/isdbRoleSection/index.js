import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Breadcrumb } from "antd";
//Style
import style from "./index.module.sass";

export default function IsdbRoleSection() {
  let router = useRouter();
  const { t } = useTranslation("common");

  const listData = [
    {
      des: "Working on making good use of the resources of the two funds by identifying and preparing projects and operations eligible for financing in accordance with the procedures and policies approved by the management committee of the two funds.",
    },
    {
      des: "Implementation of projects and operations financed by the two funds by following the ways and means that ensure efficiency in spending, quality in delivery and sufficient flexibility to achieve speed in implementation.",
    },
    {
      des: "Coordination with national and regional financial institutions in the region as well as international institutions to attract additional resources to serve the objectives of the two funds.",
    },
    {
      des: "Preserving the liquid assets of the two funds and investing them in the best means that accept an acceptable return with the least risk.",
    },
  ];
  return (
    <div className={`${style.role_bg} py-5`}>
      <div className={`${style.role_container}`}>
        <div className={`${style.role_details_conatiner} shadow my-5`}>
          <div className={`p-5`}>
            <h3
              className={`fw-bold mb-4 ${
                router.locale === "en" ? `` : `text-end`
              } `}
            >
              {t("Role of IsDB")}
            </h3>
            <p
              className={`mb-5 h6 ${router.locale === "en" ? `` : `text-end`}`}
            >
              The Council of Arab Finance Ministers has entrusted the Islamic
              Development Bank with the task of managing the two funds in a way
              that ensures the proper use and development of its resources and
              in a manner that achieves the goals for which the two funds were
              established, namely supporting the steadfastness of the
              Palestinian people, preserving the Arab and Islamic identity of
              Jerusalem and enabling the Palestinian economy to develop its own
              capabilities.
            </p>
            <p className={`h6 ${router.locale === "en" ? `` : `text-end`}`}>
              From this point of view, the bank’s mission is to:
            </p>
            {listData.map(data => (
              <>
                {router.locale === "en" ? (
                  <div className={`d-flex align-item-start`}>
                    <span className={`${style.role_bullet_point} mx-2`}>
                      &#8226;
                    </span>
                    <p className={`mt-2 mb-0 pt-1 h6`}>{data.des}</p>
                  </div>
                ) : (
                  <div className={`d-flex justify-content-end`}>
                    <p className={`mt-2 mb-0 h6 pt-1 text-end`}>{data.des}</p>
                    <span className={`${style.role_bullet_point} mx-2`}>
                      &#8226;
                    </span>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
