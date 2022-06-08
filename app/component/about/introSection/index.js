import { useRouter } from "next/router";
import style from "./index.module.sass";

export default function IntroSection({ data }) {
  const router = useRouter();
  return (
    <div className={`${style.intro_container}`}>
      <p
        className={`${style.intro_description} my-3 px-5 text-justify
        `}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
      <p
        className={`${style.intro_description_IBM} my-3 px-5 bold text-justify
        `}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
      <p
        className={`${style.intro_description_Noto} my-3 px-5 bold text-justify
        `}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
      <p
        className={`${style.intro_description_NotoSan} my-3 px-5 bold text-justify
        `}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
      <p
        className={`${style.intro_description_NotoNaskh} my-3 px-5 bold text-justify
        `}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
    </div>
  );
}
