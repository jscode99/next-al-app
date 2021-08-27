//Page components
import ContactForm from "./contact-form/ContactForm";
import ContactDetails from "./contact-details/ContactDetails";
import ContactMap from "./contact-map/ContactMap";
//styles
import style from "./index.module.sass";

export default function Contact({}) {
  return (
    <>
      <ContactForm />
      <ContactDetails />
      <ContactMap />
    </>
  );
}
