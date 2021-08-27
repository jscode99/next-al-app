import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppHead from "../../common-component/head/Head";
import AppLoader from "../../common-component/app-loader/AppLoader";
import AppHeader from "../../common-component/header/Header";
import HeroImage from "../../common-component/hero-image/HeroImage";
import Footer from "../../common-component/footer/Footer";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
import BannerCardSection from "../../component/landing/banner-card-section/BannerCardSection";
import style from "./index.module.sass";

export default function Layout({
  children,
  heroImage,
  page,
  pageName,
  projectTitle,
  title,
}) {
  const { t } = useTranslation("common");
  return (
    <>
      <AppHead />
      <AppLoader />
      <div className={`position-relative `} /* ${style.hero_image_container} */>
        <AppHeader pageName={pageName} projectTitle={projectTitle} />
        {page === "landing" ? (
          <BannerCardSection />
        ) : (
          <PageCommonSection title={t(title)} />
        )}
        <HeroImage image={heroImage} pageName={pageName} />
      </div>
      {children}
      <Footer />
    </>
  );
}
