import { useState } from "react";
import style from "./index.module.sass";

export default function AppStep({ textAlign, step, defaultActiveStep }) {
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
                textAlign === "right" ? "text-start" : "text-end"
              } ${defaultActive === index ? `fw-bold` : ``} cursor-pointer`}
            >
              {data.title}
            </h5>
            <h6
              className={`${
                textAlign === "right" ? "text-start" : "text-end"
              } ${style.description} mb-5 cursor-pointer`}
            >
              {data.description}
            </h6>
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
