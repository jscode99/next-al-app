import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
//styles
import style from "./index.module.sass";

export default function ShareHolder({ flagData }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  useEffect(() => {
    // console.log("scroll", document.getElementById("scroll").scrollLeft);
    // document.getElementById("scroll").scrollLeft = "20%"; //1000; //1400;
  }, []);
  return (
    <div className={`${style.bg} pb-5`}>
      <h1 className={`text-center fw-bold py-5`}>{t("ShareHolders")}</h1>
      <div className={`${style.shareHolder_container} overflow-hidden`}>
        <div
          id="scroll"
          className={`${style.shareHolder_scrollable} d-flex align-items-center `}
        >
          {flagData.map((data) => (
            <>
              <div>
                <div
                  className={`${style.flag_container} d-flex justify-content-center align-items-center flex-column`}
                >
                  <div className={`rounded-circle`}>
                    <Image
                      src={data.url}
                      alt={`Flags`}
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <p className={`text-center`}>{data.title}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
