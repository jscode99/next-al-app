import AppHead from "../../common-component/head/Head";
import AppLoader from "../../common-component/app-loader/AppLoader";
import AppHeader from "../../common-component/header/Header";
import HeroImage from "../../common-component/hero-image/HeroImage";
import Footer from "../../common-component/footer/Footer";
import BannerCardSection from "../../component/landing/banner-card-section/BannerCardSection";
import { Scrollbars } from "react-custom-scrollbars";
import style from "./index.module.sass";

export default function Layout({
  children,
  heroImage,
  page,
  pageName,
  projectTitle,
}) {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: `#5ca849`,
      borderRadius: `3px`,
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <>
    {/* <Scrollbars
      style={{ width: "100vw", height: "100vh" }}
      thumbMinSize={60}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      renderThumbVertical={renderThumb}
    > */}
      <AppHead />
      <AppLoader />
      <div className={`position-relative ${style.hero_image_container}`}>
        <AppHeader pageName={pageName} projectTitle={projectTitle} />
        {page === "landing" && <BannerCardSection />}
        <HeroImage image={heroImage} />
      </div>
      {children}
      <Footer />
    {/* </Scrollbars> */}
    </>
  );
}
