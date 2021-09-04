//Page components
import ContactForm from "./contact-form/ContactForm";
import ContactDetails from "./contact-details/ContactDetails";
import ContactMap from "./contact-map/ContactMap";

export default function Contact({ staticSite }) {
  return (
    <>
      <ContactForm />
      {staticSite[0].static.contact_contactDetails.length > 0 && (
        <ContactDetails data={staticSite[0].static.contact_contactDetails} />
      )}
      <ContactMap />
    </>
  );
}
