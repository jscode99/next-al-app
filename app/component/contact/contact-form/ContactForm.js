import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Col, message, Row } from "antd";
import UseContactForm from "../../../common-component/app-form-elements/ContactForm";
import AppInput from "../../../common-component/app-form-elements/AppInput";
import AppTextArea from "../../../common-component/app-form-elements/TextArea";
import AppButton from "../../../common-component/app-form-elements/AppButton";

//styles
import style from "../index.module.sass";

export default function ContactForm() {
  let router = useRouter();
  const { t } = useTranslation("common");
  //state
  const [registerDone, setRegisterDone] = useState(false);
  // Form Initial Objects
  const fromObject = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  };
  // Error Initial Object
  const errorObj = {
    firstName: null,
    email: null,
    phoneNumber: null,
    subject: null,
    message: null,
  };
  //UseForm
  const { handleSubmit, handleInputChange, inputs, errors } = UseContactForm(
    fromObject,
    errorObj,
    setRegisterDone,
  );

  return (
    <>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <AppInput
            sm={true}
            label={t("First Name")}
            placeholder={t("Enter First Name")}
            name="firstName"
            errorText={`Please enter the field properly.`}
            errorCheck={
              errors.firstName !== null && !errors.firstName ? true : false
            }
            value={inputs.firstName}
            error={errors.firstName}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`d-flex justify-content-end w-100`}>
            <AppInput
              sm={true}
              label={t("Last Name (Optional)")}
              placeholder={t("Enter Last Name")}
              name="lastName"
              value={inputs.lastName}
              onChange={handleInputChange}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <AppInput
            sm={true}
            label={t("Email Address")}
            placeholder={t("Enter Email Address")}
            name="email"
            errorText={`Please check your email.`}
            errorCheck={errors.email !== null && !errors.email ? true : false}
            value={inputs.email}
            error={errors.email}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className={`d-flex align-items-end w-100 flex-column`}>
            <AppInput
              sm={true}
              label={
                router.locale === "en" ? `Phone Number` : `رقم الهاتف \ الجوال`
              }
              placeholder={
                router.locale === "en"
                  ? `Enter Phone Number`
                  : `ادخل رقم الهاتف \ الجوال`
              }
              errorText={`Enter a valid phone number or try adding your country code.`}
              errorCheck={
                errors.phoneNumber !== null && !errors.phoneNumber
                  ? true
                  : false
              }
              name="phoneNumber"
              value={inputs.phoneNumber}
              error={errors.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppInput
            label={t("Subject")}
            placeholder={t("Enter Subject")}
            name="subject"
            errorText={`Please enter a valid subject.`}
            errorCheck={
              errors.subject !== null && !errors.subject ? true : false
            }
            value={inputs.subject}
            error={errors.subject}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <AppTextArea
            label={t("Message")}
            placeholder={t("Enter Message")}
            name="message"
            errorText={`Please enter a valid message.`}
            errorCheck={
              errors.message !== null && !errors.message ? true : false
            }
            value={inputs.message}
            error={errors.message}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className={`d-flex justify-content-end w-100`}>
            <AppButton
              text={t("Submit")}
              OnClickHandler={() => {
                handleSubmit(inputs);
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}
