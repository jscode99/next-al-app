import Link from "next/link";
import styles from "./index.module.sass";

export default function Sitemap({}) {
  return (
    <>
      <div className={`${styles.container} container`}>
        <div>
          <div>
            <Link className={`${styles.SiteMapAtag}`} href="/">
              Front page of Islamic Development Bank
            </Link>
          </div>
        </div>

        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/">
              Home
            </Link>
          </div>
        </div>
        <div>
          <div className={` d-flex align-items-center m-2`}>
            <div className={`${styles.departmentHomeRouteDot} `}>
              <i className="fa fa-circle px-2"></i>
            </div>
            <div className={`${styles.SiteMapMainHead}`}>
              <Link className={`${styles.SiteMapAtag}`} href="/about">
                About
              </Link>
            </div>
          </div>

          <div className={`${styles.departmentHomeRouteDot} ms-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <Link
                className={`${styles.SiteMapAtag}`}
                href="/about/governance-structure"
              >
                Governance Structure
              </Link>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} ms-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <Link className={`${styles.SiteMapAtag}`} href="/about/members">
                Members
              </Link>
            </span>
          </div>
          <div className={`${styles.departmentHomeRouteDot} ms-4 d-flex`}>
            <i className="fa fa-circle-o p-1"></i>
            <span>
              <Link
                className={`${styles.SiteMapAtag}`}
                href="/about/approval-process-and-selection-criteria"
              >
                Approval Process And Selection Criteria
              </Link>
            </span>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/contributions">
              Contributions
            </Link>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/projects">
              Projects
            </Link>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/success-stories">
              Success Stories
            </Link>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/publications">
              Publications
            </Link>
          </div>
        </div>
        <div className={` d-flex align-items-center m-2`}>
          <div className={`${styles.departmentHomeRouteDot} `}>
            <i className="fa fa-circle px-2"></i>
          </div>
          <div className={`${styles.SiteMapMainHead}`}>
            <Link className={`${styles.SiteMapAtag}`} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
