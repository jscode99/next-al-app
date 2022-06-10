import { useRouter } from "next/router";
import style from "./index.module.sass";

export default function IntroSection({ data }) {
  const router = useRouter();
  return (
    <div className={`${style.intro_container}`}>
      <p
        className={`${
          router.locale === "en"
            ? style.intro_description
            : style.intro_description_ar
        } my-3 px-5 text-justify
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
