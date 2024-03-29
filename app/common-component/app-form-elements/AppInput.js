import { useRouter } from "next/router";
import { Input } from "antd";
import style from "./index.module.sass";

export default function AppInput({
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
      } d-flex justify-content-center align-items-center flex-column`}
    >
      <div
        className={`d-flex ${
          router.locale === "en"
            ? "justify-content-start"
            : "justify-content-end"
        } align-items-center w-100`}
      >
        <span
          className={`${
            router.locale === "en" ? style.app_label : style.app_label_ar
          } text-capitalize`}
        >
          {label}
        </span>
      </div>
      <div className={`d-flex justify-content-center align-items-center w-100`}>
        <Input
          placeholder={`${placeholder}`}
          className={`text-capitalize ${
            errorCheck ? "border border-danger" : ""
          }  ${router.locale === "en" ? style.app_input : style.app_input_ar}`}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      <div
        className={`d-flex ${
          router.locale === "en"
            ? `justify-content-start`
            : `justify-content-end`
        } align-items-center w-100`}
      >
        <p
          className={`text-capitalize text-danger mb-0 ${style.error} ${
            errorCheck ? "" : style.visibility
          }`}
        >
          {errorText}
        </p>
      </div>
    </div>
  );
}
