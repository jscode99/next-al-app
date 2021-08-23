import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Row, Col } from "antd";
import InnerLayout from "../../common-component/inner-layout/InnerLayout";
import PageCommonSection from "../../common-component/page-common-section/PageCommonSection";
//Page components
import ContactForm from "./contact-form/ContactForm";
import ContactDetails from "./contact-details/ContactDetails";
import ContactMap from "./contact-map/ContactMap";
//styles
import style from "./index.module.sass";

export default function Contact({}) {
  let router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div className={`${style.bg}`}>
        <InnerLayout>
          <PageCommonSection title={t("Get in Touch")} />
          <ContactForm />
        </InnerLayout>
      </div>
      <ContactDetails />
      <ContactMap />
    </>
  );
}
