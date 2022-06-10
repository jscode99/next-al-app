import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Col, message, Row } from "antd";
import UseContactForm from "../../../common-component/app-form-elements/ContactForm";
import AppInput from "../../../common-component/app-form-elements/AppInput";
import AppTextArea from "../../../common-component/app-form-elements/TextArea";
import AppButton from "../../../common-component/app-form-elements/AppButton";

//styles
import style from "./index.module.sass";

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
    setRegisterDone
  );

  return (
    <div className={`${style.bg} py-4`}>
      <div
        className={`${router.locale === "ar" ? style.input_box : ""} ${
          style.form_container
        } px-5`}
      >
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <Row className={`px-4`}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                {router.locale === "en" ? (
                  <AppInput
                    sm={true}
                    label={t("first name")}
                    placeholder={t("enter first name")}
                    name="firstName"
                    errorText={t("please enter a valid name.")}
                    errorCheck={
                      errors.firstName !== null && !errors.firstName
                        ? true
                        : false
                    }
                    value={inputs.firstName}
                    error={errors.firstName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <AppInput
                    sm={true}
                    label={t("last name (optional)")}
                    placeholder={t("enter last name")}
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleInputChange}
                  />
                )}
              </Col>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <div className={`d-flex justify-content-end w-100`}>
                  {router.locale === "en" ? (
                    <AppInput
                      sm={true}
                      label={t("last name (optional)")}
                      placeholder={t("enter last name")}
                      name="lastName"
                      value={inputs.lastName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <AppInput
                      sm={true}
                      label={t("first name")}
                      placeholder={t("enter first name")}
                      name="firstName"
                      errorText={t("please enter a valid name.")}
                      errorCheck={
                        errors.firstName !== null && !errors.firstName
                          ? true
                          : false
                      }
                      value={inputs.firstName}
                      error={errors.firstName}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              </Col>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <AppInput
                  sm={true}
                  label={t("last name (optional)")}
                  placeholder={t("enter last name")}
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className={`px-4`}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <AppInput
                  sm={true}
                  label={t("email address")}
                  placeholder={t("enter email address")}
                  name="email"
                  errorText={t("please enter a valid email.")}
                  errorCheck={
                    errors.email !== null && !errors.email ? true : false
                  }
                  value={inputs.email}
                  error={errors.email}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <div className={`d-flex align-items-end w-100 flex-column`}>
                  <AppInput
                    sm={true}
                    label={t("phone number")}
                    placeholder={t("enter phone number")}
                    errorText={t(
                      "please enter a valid phone number or try adding your country code."
                    )}
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
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <AppInput
                  sm={true}
                  label={t("phone number")}
                  placeholder={t("enter phone number")}
                  errorText={t(
                    "please enter a valid phone number or try adding your country code."
                  )}
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
              </Col>
            </Row>
            <Row className={`px-4`}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AppInput
                  label={t("subject")}
                  placeholder={t("enter subject")}
                  name="subject"
                  errorText={t("please enter a valid subject.")}
                  errorCheck={
                    errors.subject !== null && !errors.subject ? true : false
                  }
                  value={inputs.subject}
                  error={errors.subject}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className={`px-4`}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AppTextArea
                  label={t("message")}
                  placeholder={t("enter message")}
                  name="message"
                  errorText={t("please enter a valid message.")}
                  errorCheck={
                    errors.message !== null && !errors.message ? true : false
                  }
                  value={inputs.message}
                  error={errors.message}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className={`px-4`}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className={`d-flex justify-content-end w-100`}>
                  <AppButton
                    text={t("submit")}
                    OnClickHandler={() => {
                      handleSubmit(inputs);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <AppInput
                  sm={true}
                  label={t("first name")}
                  placeholder={t("enter first name")}
                  name="firstName"
                  errorText={t("please enter a valid name.")}
                  errorCheck={
                    errors.firstName !== null && !errors.firstName
                      ? true
                      : false
                  }
                  value={inputs.firstName}
                  error={errors.firstName}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <div className={`d-flex justify-content-end w-100`}>
                  <AppInput
                    sm={true}
                    label={t("last name (optional)")}
                    placeholder={t("enter last name")}
                    name="lastName"
                    value={inputs.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <AppInput
                  sm={true}
                  label={t("last name (optional)")}
                  placeholder={t("enter last name")}
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <AppInput
                  sm={true}
                  label={t("email address")}
                  placeholder={t("enter email address")}
                  name="email"
                  errorText={t("please enter a valid email.")}
                  errorCheck={
                    errors.email !== null && !errors.email ? true : false
                  }
                  value={inputs.email}
                  error={errors.email}
                  onChange={handleInputChange}
                />
              </Col>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <div className={`d-flex align-items-end w-100 flex-column`}>
                  <AppInput
                    sm={true}
                    label={t("phone number")}
                    placeholder={t("enter phone number")}
                    errorText={t(
                      "please enter a valid phone number or try adding your country code."
                    )}
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
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <AppInput
                  sm={true}
                  label={t("phone number")}
                  placeholder={t("enter phone number")}
                  errorText={t(
                    "please enter a valid phone number or try adding your country code."
                  )}
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
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AppInput
                  label={t("subject")}
                  placeholder={t("enter subject")}
                  name="subject"
                  errorText={t("please enter a valid subject.")}
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
                  label={t("message")}
                  placeholder={t("enter message")}
                  name="message"
                  errorText={t("please enter a valid message.")}
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
                    text={t("submit")}
                    OnClickHandler={() => {
                      handleSubmit(inputs);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
