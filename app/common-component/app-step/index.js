import { useState } from "react";
import { useRouter } from "next/router";
import style from "./index.module.sass";

export default function AppStep({ textAlign, step, defaultActiveStep }) {
  const router = useRouter();
  const [defaultActive, setDefaultActive] = useState(defaultActiveStep - 1);
  return (
    <div className="d-flex flex-column w-100">
      {step.map((data, index) => (
        <div
          key={index}
          className="d-flex justify-content-center align-items-center"
          onClick={() => setDefaultActive(index)}
        >
          {textAlign === "right" && (
            <div className="d-flex flex-column h-100 w-25 justify-content-center align-items-center">
              <div
                className={`${style.step_bullet} ${
                  defaultActive === index ? "text-dark" : ""
                } cursor-pointer`}
              >
                &#8226;
              </div>
              <div
                className={`${style.step_connecter} h-100 ${
                  index !== step.length - 1 ? "visible" : "invisible"
                } cursor-pointer`}
              ></div>
            </div>
          )}
          <div className={`d-flex flex-column w-75`}>
            <h5
              className={`${
                router.locale === "en" ? style.step_title : style.step_title_ar
              } ${textAlign === "right" ? "text-justify" : "text-justify"} ${
                defaultActive === index ? `fw-bold` : ``
              } cursor-pointer`}
              dir={router.locale === "ar" ? "rtl" : ""}
            >
              {data.title}
            </h5>
            <p
              className={` ${
                textAlign === "right" ? "text-justify" : "text-justify"
              } ${defaultActive === index ? "fw-bold" : ""} ${
                router.locale === "en"
                  ? style.description
                  : style.description_ar
              } mb-5 cursor-pointer`}
              dir={router.locale === "ar" ? "rtl" : ""}
            >
              {data.description}
            </p>
          </div>
          {textAlign === "left" && (
            <div className="d-flex flex-column h-100 w-25 justify-content-center align-items-center">
              <div
                className={`${style.step_bullet} ${
                  defaultActive === index ? "text-dark" : ""
                } cursor-pointer`}
              >
                &#8226;
              </div>
              <div
                className={`${style.step_connecter} h-100 ${
                  index !== step.length - 1 ? "visible" : "invisible"
                } cursor-pointer`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
