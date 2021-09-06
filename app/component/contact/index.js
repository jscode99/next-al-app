import { useRouter } from "next/router";
//Page components
import ContactForm from "./contact-form/ContactForm";
import ContactDetails from "./contact-details/ContactDetails";
import ContactMap from "./contact-map/ContactMap";

export default function Contact({ staticSite, staticSiteAr }) {
  let router = useRouter();
  return (
    <>
      <ContactForm />
      {router.locale === "en"
        ? staticSite[0].static.contact_contactDetails.length > 0 && (
            <ContactDetails
              data={staticSite[0].static.contact_contactDetails}
            />
          )
        : staticSiteAr[0].static.contact_contactDetails.length > 0 && (
            <ContactDetails
              data={staticSiteAr[0].static.contact_contactDetails}
            />
          )}
      <ContactMap />
    </>
  );
}
