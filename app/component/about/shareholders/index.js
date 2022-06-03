import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
//styles
import style from "./index.module.sass";

export default function ShareHolder({ flagData }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  console.log(
    "FlagDat",
    flagData.sort((a, b) => a.Country.localeCompare(b.Country, ["ar"]))
  );

  useEffect(() => {}, []);

  return (
    <div className={`${style.bg} pb-5`}>
      <div className={`${style.shareHolder_container} overflow-hidden px-5`}>
        <p
          className={`${style.shareHolder_title} text-capitalize text-center py-4 m-0`}
        >
          {t("shareHolders")}
        </p>
        <div
          id="scroll"
          className={`${style.shareHolder_scrollable} d-flex align-items-center `}
          style={{ transform: router.locale === "ar" ? `scaleX(-1)` : `` }}
        >
          {flagData
            .sort((a, b) => {
              if (router.locale === "ar") {
                a.Country.localeCompare(b.Country, ["ar"]);
              } else {
                //  ( a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0)
                if (a.Country < b.Country) {
                  return -1;
                } else if (a.Country > b.Country) return 1;
              }
            })
            .map((data) => (
              <>
                <div>
                  <div
                    className={`${style.flag_container} d-flex justify-content-center align-items-center flex-column`}
                  >
                    <div className={`${style.flag_image} rounded-circle`}>
                      <Image
                        src={process.env.BASE_URL + data.Flag.url}
                        alt={`Flags`}
                        height="80px"
                        width="80px"
                      />
                    </div>
                    <p
                      className={`${
                        router.locale === "en"
                          ? style.shareHolder_labels
                          : style.shareHolder_labels_AR
                      } text-capitalize text-center`}
                    >
                      {data.Country}
                    </p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
