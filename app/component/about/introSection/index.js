import { useRouter } from "next/router";
import style from "./index.module.sass";

export default function IntroSection({ data }) {
  const router = useRouter();
  return (
    <div className={`${style.intro_container}`}>
      <p
        className={`${style.intro_description} my-3 px-5 ${
          router.locale === "en" ? `text-start` : `text-end`
        }`}
      >
        {data.description &&
          Object.keys(data.description).length > 0 &&
          data.description}
      </p>
    </div>
  );
}
