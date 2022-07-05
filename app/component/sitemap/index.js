import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styles from "./index.module.sass";
import { mapTitleToRoutePath } from "../../services/projectTitle";

export default function Sitemap({ projectTitle }) {
  console.log("Title project title---->", projectTitle);
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <div
        className={`${styles.container} ${
          router.locale === "en"
            ? styles.sitemap_title
            : styles.sitemap_title_ar
        } container text-capitalize`}
        dir={router.locale === "ar" ? "rtl" : ""}
      >
        <div>
          <div className="my-3">
            <p
              className={`${
                router.locale === "en"
                  ? styles.SiteMapIntial
                  : styles.SiteMapIntial_ar
              } text-capitalize`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                router.push("/");
              }}
            >
              {t("front page of Al Aqsa Fund Website")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center my-3`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag} m-0`}
              style={{ fontWeight: "600" }}
              onClick={() => {
                router.push("/");
              }}
            >
              {t("home")}
            </p>
          </div>
        </div>
        <div>
          <div className={` d-flex align-items-center my-3`}>
            <div className={`${styles.departmentHomeRouteDot} `}>
              <i className="fa fa-circle px-2"></i>
            </div>
            <div className={`${styles.SiteMapMainHead}`}>
              <p
                className={`${styles.SiteMapAtag} m-0`}
                onClick={() => {
                  router.push("/about");
                }}
                style={{ fontWeight: "600" }}
              >
                {t("about")}
              </p>
            </div>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 my-3 d-flex`}>
            <i className="fa fa-circle-o p-2"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag} m-0`}
                style={{ fontSize: "15px" }}
                onClick={() => {
                  router.push("/about/governance-structure");
                }}
              >
                {t("governance structure")}
              </p>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 my-3 d-flex`}>
            <i className="fa fa-circle-o p-2"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag} m-0`}
                style={{ fontSize: "15px" }}
                onClick={() => {
                  router.push("/about/members");
                }}
              >
                {t("members")}
              </p>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 my-3 d-flex`}>
            <i className="fa fa-circle-o p-2"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag} m-0`}
                style={{ fontSize: "15px" }}
                onClick={() => {
                  router.push("/about/approval-process-and-selection-criteria");
                }}
              >
                {t("approval process and selection criteria")}
              </p>
            </span>
          </div>
        </div>
        <div className={` d-flex align-items-center my-3`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag} m-0`}
              onClick={() => {
                router.push("/contributions");
              }}
              style={{ fontWeight: "600" }}
            >
              {t("contributions")}
            </p>
          </div>
        </div>
        <div>
          <div className={` d-flex align-items-center my-3`}>
            <div className={`${styles.departmentHomeRouteDot} `}>
              <i className="fa fa-circle px-2"></i>
            </div>
            <div className={`${styles.SiteMapMainHead}`}>
              <p
                className={`${styles.SiteMapAtag} m-0`}
                style={{ fontWeight: "600" }}
                onClick={() => {
                  router.push("/projects");
                }}
              >
                {t("projects")}
              </p>
            </div>
          </div>
          {projectTitle &&
            projectTitle.length > 0 &&
            projectTitle.map((data, index) => (
              <div
                key={index}
                className={`${styles.departmentHomeRouteDot} mx-4 my-3 d-flex`}
              >
                <i className="fa fa-circle-o p-2"></i>
                <span>
                  <p
                    className={`${styles.SiteMapAtag} m-0`}
                    style={{ fontSize: "15px" }}
                    onClick={() => {
                      router.push({
                        pathname: `/projects/${mapTitleToRoutePath(
                          data.title
                        )}`,
                        query: { ...router.query },
                      });
                    }}
                  >
                    {data.title}
                  </p>
                </span>
              </div>
            ))}
        </div>
        <div className={` d-flex align-items-center my-3`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag} m-0`}
              style={{ fontWeight: "600" }}
              onClick={() => {
                router.push("/success-stories");
              }}
            >
              {t("success stories")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center my-3`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag} m-0`}
              style={{ fontWeight: "600" }}
              onClick={() => {
                router.push("/publications");
              }}
            >
              {t("publications")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center my-3 mb-4`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag} m-0`}
              style={{ fontWeight: "600" }}
              onClick={() => {
                router.push("/contact");
              }}
            >
              {t("contact")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
