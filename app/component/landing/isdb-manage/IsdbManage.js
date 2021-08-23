import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import IsdbManageCard from "./IsdbManageCard";
import style from "./index.module.sass";

export default function IsdbManage({}) {
  const router = useRouter();
  const { t } = useTranslation("common");
  let cardData = [
    {
      logo: "/images/trust/Kuwait.webp",
      text: "Kuwait Fund for Development",
      amount: "$120 mn",
    },
    {
      logo: "/images/trust/Palastine.webp",
      text: "Palestine Trust Funds",
      amount: "$100 mn",
    },
    {
      logo: "/images/trust/Al-Aqsa.webp",
      text: "Qudus Fund",
      amount: "$80 mn",
    },
  ];
  let cardArData = [
    {
      logo: "/images/trust/Kuwait.webp",
      text: "........",
      amount: ".....",
    },
    {
      logo: "/images/trust/Palastine.webp",
      text: "........",
      amount: ".....",
    },
    {
      logo: "/images/trust/Al-Aqsa.webp",
      text: "........",
      amount: ".....",
    },
  ];
  return (
    <div className={`${style.isdb_manage_container}`}>
      <div className="py-5">
        <h3 className={`${style.isdb_manage_title} text-center mb-5`}>
          {t("IsDB also manages")}
        </h3>
        <div className="w-100 d-flex justify-content-center align-items-center">
          {router.locale === "en"
            ? cardData.map(data => <IsdbManageCard data={data} />)
            : cardArData.map(data => <IsdbManageCard data={data} />)}
        </div>
      </div>
    </div>
  );
}
