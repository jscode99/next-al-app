import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useInView } from "react-hook-inview";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import CountUp from "../../../common-component/app-animation/count-up";
import { splitLetterNumberService } from "../../../services/commonService";
import style from "./index.module.sass";

export default function BannerCard({ data }) {
  console.log("BANNER CARD", data);
  const [countUpArray, setcountUpArray] = useState("");
  const [ref, isVisible] = useInView({
    threshold: 1,
  });
  const router = useRouter();
  const subtitleFunc = () => {
    if (data.navigation) {
      if (router.locale === "en") {
        return (
          <div
            style={{ cursor: "pointer" }}
            className={`text-capitalize`}
            onClick={() => {
              router.push("/contributions");
            }}
          >
            {data.subTitle}
            <RightOutlined className={`${style.banner_card_nav_arrow} ps-1`} />
          </div>
        );
      } else {
        return (
          <div
            className={`text-capitalize`}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push("/contributions");
            }}
          >
            <LeftOutlined className={`${style.banner_card_nav_arrow} ps-1`} />
            {data.subTitle}
          </div>
        );
      }
    } else {
      return <div className={`text-capitalize`}>{data.subTitle}</div>;
    }
  };

  useEffect(() => {
    // let countUpArray = splitLetterNumberService(data.title);
    if (data && Object.keys(data).length > 0)
      setcountUpArray(splitLetterNumberService(data.title.toString()));
  }, [data]);

  // console.log("countUpArray", countUpArray);
  return (
    <div className={`${style.banner_card} bg-white mb-5`}>
      <div className={`${style.banner_card_logo_container}`}>
        <div
          className={`${style.banner_card_logo_section} ${data.bgColor} d-flex justify-content-center align-items-center position-relative rounded-circle m-auto`}
        >
          <Image src={data.logo} alt={`Logo`} height="20px" width="20px" />
        </div>
      </div>
      <h3
        ref={ref}
        className={`${style.banner_card_title} text-center d-flex justify-content-center m-1`}
      >
        {countUpArray &&
          countUpArray.length > 0 &&
          countUpArray.map(value => {
            if (Number.isNaN(parseFloat(value))) {
              return value;
            } else {
              if (isVisible)
                return (
                  <CountUp
                    value={parseFloat(value)}
                    floatLength={data.floatLength}
                    scroll={false}
                  />
                );
              else return parseFloat(value);
            }
          })}
      </h3>
      <p
        className={`${style.banner_card_subtitle} ${data.ftColor} text-center`}
      >
        {subtitleFunc()}
      </p>
    </div>
  );
}
