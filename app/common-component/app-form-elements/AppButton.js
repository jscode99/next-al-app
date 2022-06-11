import { useRouter } from "next/router";
import { Button } from "antd";
import style from "./index.module.sass";

export default function AppButton({ text, OnClickHandler }) {
  const router = useRouter();
  return (
    <Button
      type="text"
      onClick={OnClickHandler}
      className={`${
        router.locale === "en" ? style.app_button : style.app_button_ar
      } text-capitalize`}
    >
      {text}
    </Button>
  );
}
