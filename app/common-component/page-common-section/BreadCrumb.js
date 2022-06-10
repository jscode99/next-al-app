import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Breadcrumb } from "antd";
import { mapTitleToRoutePath } from "../../../app/services/storiesTitle";
import style from "./index.module.sass";

export default function BreadCrumb({ breadcrumList }) {
  const { t } = useTranslation("common");
  // console.log("lllll", breadcrumList);
  let router = useRouter();
  return (
    <Breadcrumb separator="">
      {breadcrumList.map((data, index) => {
        if (!data) {
          return (
            <>
              <Breadcrumb.Item
                className={`${
                  router.locale === "en"
                    ? style.breadcrumb_item
                    : style.breadcrumb_item_ar
                }`}
                href={router.locale === "en" ? "/" : "/ar"}
              >
                {router.locale === "en" ? "Home" : "الرئيسية"}
              </Breadcrumb.Item>
              <Breadcrumb.Separator>
                <span className={`${style.primary_color} ${style.separator}`}>
                  &#8226;
                </span>
              </Breadcrumb.Separator>
            </>
          );
        } else {
          if (index === breadcrumList.length - 1) {
            return (
              <Breadcrumb.Item
                className={`${
                  router.locale === "en"
                    ? style.breadcrumb_item
                    : style.breadcrumb_item_ar
                } ${style.primary_color}`}
              >
                {router.locale === "en"
                  ? t(data).length > 30
                    ? t(data).substring(0, 30).concat("...")
                    : t(data)
                  : t(data).length > 30
                  ? t(data).substring(0, 30)
                  : t(data)}
              </Breadcrumb.Item>
            );
          } else {
            return (
              <>
                <Breadcrumb.Item
                  className={`${
                    router.locale === "en"
                      ? style.breadcrumb_item
                      : style.breadcrumb_item_ar
                  }`}
                  href={`${
                    router.locale === "en"
                      ? `/en/${mapTitleToRoutePath(data)}`
                      : `/${mapTitleToRoutePath(data)}`
                  }`}
                >
                  {router.locale === "en"
                    ? t(data).length > 30
                      ? t(data).substring(0, 30).concat("...")
                      : t(data)
                    : t(data).length > 30
                    ? t(data).substring(0, 30)
                    : t(data)}
                </Breadcrumb.Item>
                <Breadcrumb.Separator>
                  <span className={`${style.primary_color} ${style.separator}`}>
                    &#8226;
                  </span>
                </Breadcrumb.Separator>
              </>
            );
          }
        }
      })}
    </Breadcrumb>
  );
}
