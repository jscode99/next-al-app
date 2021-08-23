import { useRouter } from "next/router";
import { Input } from "antd";
import style from "./index.module.sass";
const { TextArea } = Input;

export default function AppTextArea({
  sm,
  label,
  placeholder,
  errorText,
  errorCheck,
  name,
  value,
  onChange,
}) {
  let router = useRouter();
  return (
    <div
      className={`${
        sm ? style.app_input_group_sm : "w-100"
      } d-flex justify-content-center align-items-center flex-column mb-4`}
    >
      <div
        className={`d-flex ${
          router.locale === "en"
            ? "justify-content-start"
            : "justify-content-end"
        } align-items-center w-100 mb-2`}
      >
        <span className={`${style.app_label}`}>{label}</span>
      </div>
      <div className={`d-flex justify-content-center align-items-center w-100`}>
        <TextArea
          rows={6}
          placeholder={`${placeholder}`}
          className={`${errorCheck ? "border border-danger" : ""}  ${
            style.app_text_area
          }`}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div
        className={`d-flex justify-content-start align-items-center mt-1 w-100`}
      >
        <p className={`text-danger mb-0 ${errorCheck ? "" : style.visibility}`}>
          {errorText}
        </p>
      </div>
    </div>
  );
}
