import React from "react";
import { Field, reduxForm } from "redux-form";
import { useTranslation } from "react-i18next";
import {
  maxLengthCreator,
  required,
} from "../../../../_utils/validators/validators";
import { Input, Textarea } from "../../../../formControl/Text";
import moduleName from "./MainBlock_contact.module.css";
let maxLength10 = maxLengthCreator(10);
let maxLength100 = maxLengthCreator(40);
function ContactForm({ handleSubmit }) {
  const { t } = useTranslation();
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <div className={moduleName.inp_body}>
        <div className={moduleName.inp_with_label}>
          <label key={"name"} htmlFor="">
            {t("forForm.name")}
          </label>
          <Field
            value={"sd"}
            name="name"
            component={Input}
            validate={[required, maxLength10]}
            className={moduleName.name}
            type="text"
          />
        </div>
        <div className={moduleName.inp_with_label}>
          <label key={"name"} htmlFor="">
            {t("forForm.email")}
          </label>
          <Field
            name="email"
            component={Input}
            validate={[required, maxLength100]}
            className={moduleName.email}
            type="email"
          />
        </div>
      </div>
      <div id="comment" className={moduleName.inp_with_labelComment}>
        <label htmlFor="comment">{t("forForm.comment")}</label>
        <Field
          name="comment"
          component={Textarea}
          validate={[required, maxLength100]}
          minLength={1}
          maxLength={300}
          className={moduleName.comment}
          type="text"
        />
      </div>
      <button>{t("forForm.button")}</button>
    </form>
  );
}

const ContactReduxForm = reduxForm({ form: " contact " })(ContactForm);
export const MainBlock = () => {
  const onClick = (formData) => {
  alert("salom dunyo!")
  };
  return (
    <div className={moduleName.body}>
      <h1 className={moduleName.title}>Header</h1>
      <ContactReduxForm onSubmit={onClick} />
    </div>
  );
};
