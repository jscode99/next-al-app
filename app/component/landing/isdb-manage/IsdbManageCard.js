import Image from "next/image";
import style from "./index.module.sass";

export default function IsdbManageCard({ data }) {
  return (
    <div className={`${style.isdb_manage_card} mx-3 shadow bg-white`}>
      <div
        className={`mt-3 mb-2 d-flex justify-content-center align-items-center`}
      >
        <Image
          src={data.logo}
          alt={`Organization Logo`}
          height="90px"
          width="95px"
        />
      </div>
      <p className={`text-center ${style.isdb_manage_card_text}`}>
        {data.text}
      </p>
      <p className={`text-center ${style.isdb_manage_card_amount}`}>
        {data.amount}
      </p>
    </div>
  );
}
