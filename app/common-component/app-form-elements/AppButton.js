import { Button } from "antd";
import style from "./index.module.sass";

export default function AppButton({ text, OnClickHandler }) {
  return (
    <Button
      type="text"
      onClick={OnClickHandler}
      className={`${style.app_button}`}
    >
      {text}
    </Button>
  );
}
