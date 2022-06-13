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
              className={`${styles.SiteMapAtag} text-capitalize`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                router.push("/");
              }}
            >
              {t("front page of islamic development bank")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag}`}
              onClick={() => {
                router.push("/");
              }}
            >
              {t("home")}
            </p>
          </div>
        </div>
        <div>
          <div className={` d-flex align-items-center m-2`}>
            <div className={`${styles.departmentHomeRouteDot} `}>
              <i className="fa fa-circle px-2"></i>
            </div>
            <div className={`${styles.SiteMapMainHead}`}>
              <p
                className={`${styles.SiteMapAtag}`}
                onClick={() => {
                  router.push("/about");
                }}
              >
                {t("about")}
              </p>
            </div>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag}`}
                onClick={() => {
                  router.push("/about/governance-structure");
                }}
              >
                {t("governance structure")}
              </p>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag}`}
                onClick={() => {
                  router.push("/about/members");
                }}
              >
                {t("members")}
              </p>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} mx-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <p
                className={`${styles.SiteMapAtag}`}
                onClick={() => {
                  router.push("/about/approval-process-and-selection-criteria");
                }}
              >
                {t("approval process and selection criteria")}
              </p>
            </span>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag}`}
              onClick={() => {
                router.push("/contributions");
              }}
            >
              {t("contributions")}
            </p>
          </div>
        </div>
        <div>
          <div className={` d-flex align-items-center m-2`}>
            <div className={`${styles.departmentHomeRouteDot} `}>
              <i className="fa fa-circle px-2"></i>
            </div>
            <div className={`${styles.SiteMapMainHead}`}>
              <p
                className={`${styles.SiteMapAtag}`}
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
                className={`${styles.departmentHomeRouteDot} mx-4 d-flex`}
              >
                <i className="fa fa-circle-o p-1"></i>
                <span>
                  <p
                    className={`${styles.SiteMapAtag}`}
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
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag}`}
              onClick={() => {
                router.push("/success-stories");
              }}
            >
              {t("success stories")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag}`}
              onClick={() => {
                router.push("/publications");
              }}
            >
              {t("publications")}
            </p>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2 mb-4`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <p
              className={`${styles.SiteMapAtag}`}
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
