import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Fragment, useRef, useContext } from "react";
import { useReactToPrint } from "react-to-print";
//Context API
import AppContext from "../../AppContext";
import AppHead from "../../common-component/head/Head";
import AppLoader from "../../common-component/app-loader/AppLoader";
import AppHeader from "../../common-component/header/Header";
import HeroImage from "../../common-component/hero-image/HeroImage";
import Footer from "../../common-component/footer/Footer";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
import BannerCardSection from "../../component/landing/banner-card-section/BannerCardSection";
import style from "./index.module.sass";

export default function Layout({
  staticSite,
  children,
  heroImage,
  page,
  pageName,
  projectTitle,
  projectData,
  title,
}) {
  // console.log("PROJECT DATA", projectData);
  const { t } = useTranslation("common");
  const printRef = useRef();
  let { appContext, setAppContext } = useContext(AppContext);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <>
      <AppHead />
      <AppLoader />
      {appContext && !appContext.loader && (
        <div className={`position-relative`}>
          <div
            className={`position-absolute w-100 h-100 ${style.hero_image_gradient}`}
          ></div>
          <AppHeader pageName={pageName} projectTitle={projectTitle} />
          <HeroImage image={heroImage} pageName={pageName} />
          {page === "landing" &&
          staticSite[0].static.home_bannerCards.length > 0 ? (
            <BannerCardSection
              data={staticSite[0].static.home_bannerCards}
              projectData={projectData}
              projectTitle={projectTitle}
            />
          ) : (
            <PageCommonSection title={t(title)} handlePrint={handlePrint} />
          )}
        </div>
      )}
      {appContext && !appContext.loader && <div ref={printRef}>{children}</div>}
      {appContext && !appContext.loader && <Footer />}
    </>
  );
}
