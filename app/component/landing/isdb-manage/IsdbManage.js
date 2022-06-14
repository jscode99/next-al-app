import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import IsdbManageCard from "./IsdbManageCard";
import style from "./index.module.sass";

export default function IsdbManage({ isdbManage, isdbManageAr }) {
  console.log("isdbManage", isdbManage);
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className={`${style.isdb_manage_bg}`}>
      <div className={`${style.isdb_manage_container}`}>
        <div className="py-4">
          <h3
            className={`${
              router.locale === "en"
                ? style.isdb_manage_title
                : style.isdb_manage_title_ar
            } text-center mb-4 text-capitalize`}
          >
            {t("other funds managed by isdb")}
          </h3>
          <div className="w-100 d-flex justify-content-center flex-wrap align-items-center">
            {router.locale === "en"
              ? isdbManage.map((data) => <IsdbManageCard data={data} />)
              : new Array(...isdbManageAr)
                  .reverse()
                  .map((data) => <IsdbManageCard data={data} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
