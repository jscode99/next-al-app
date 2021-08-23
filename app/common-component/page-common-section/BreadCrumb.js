import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Breadcrumb } from "antd";
import { mapTitleToRoutePath } from "../../../app/services/storiesTitle";
import style from "./index.module.sass";

export default function BreadCrumb({ breadcrumList }) {
  const { t } = useTranslation("common");
  console.log("lllll", breadcrumList);
  let router = useRouter();
  return router.locale === "en" ? (
    <Breadcrumb separator="">
      {breadcrumList.map((data, index) => {
        if (!data) {
          return (
            <>
              <Breadcrumb.Item className={`${style.breadcrumb_item}`} href="/">
                Home
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
                className={`${style.breadcrumb_item} ${style.primary_color}`}
              >
                {t(data)}
              </Breadcrumb.Item>
            );
          } else {
            return (
              <>
                <Breadcrumb.Item
                  className={`${style.breadcrumb_item}`}
                  href={`/${mapTitleToRoutePath({ Title: data })}`}
                >
                  {t(data)}
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
  ) : (
    <Breadcrumb separator="">
      {breadcrumList.map((data, index) => {
        if (!data) {
          return (
            <>
              <Breadcrumb.Separator>
                <span className={`${style.primary_color} ${style.separator}`}>
                  &#8226;
                </span>
              </Breadcrumb.Separator>
              <Breadcrumb.Item className={`${style.breadcrumb_item}`} href="/">
                الرئيسية
              </Breadcrumb.Item>
            </>
          );
        } else {
          if (index === 0) {
            return (
              <Breadcrumb.Item
                className={`${style.breadcrumb_item} ${style.primary_color}`}
              >
                {t(data)}
              </Breadcrumb.Item>
            );
          } else {
            return (
              <>
                <Breadcrumb.Separator>
                  <span className={`${style.primary_color} ${style.separator}`}>
                    &#8226;
                  </span>
                </Breadcrumb.Separator>
                <Breadcrumb.Item
                  className={`${style.breadcrumb_item}`}
                  href={`/${mapTitleToRoutePath({ Title: data })}`}
                >
                  {t(data)}
                </Breadcrumb.Item>
              </>
            );
          }
        }
      })}
    </Breadcrumb>
  );
}
