import Image from "next/image";
import style from "./index.module.sass";
import { useRouter } from "next/router";

export default function IsdbManageCard({ data }) {
  console.log("ISDB Manages--->",data);
  const router = useRouter();
  return (
    <div className={`${style.isdb_manage_card} shadow mx-3 bg-white mb-3`}>
      <div
        className={`mt-3 mb-2 d-flex justify-content-center align-items-center`}
      >
        <Image
          src={process.env.BASE_URL + data.logo[0].url}
          alt={`Organization Logo`}
          height="90px"
          width="95px"
        />
      </div>
      <p
        className={`text-center ${
          router.locale === "en"
            ? style.isdb_manage_card_text
            : style.isdb_manage_card_text_ar
        } mb-2 mx-2`}
      >
        {data.title}
      </p>
      <p
        style={{ direction: router.locale === "ar" ? "rtl" : "ltr" }}
        className={`text-center ${style.isdb_manage_card_amount} mb-2`}
      >
        {data.amount}
      </p>
    </div>
  );
}
