import React, { useState } from "react";
import {
  ContactForm,
  ContactInput,
  ContactTextArea,
  FormButton,
} from "./ContactElements";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Contact = () => {
  const [state, setState] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
    setState({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  const { name, email, message } = state;

  return (
    <SectionWrapper lastChild id="contact">
      <h1>Contact</h1>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        <ContactInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
        <ContactTextArea
          name="message"
          value={message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <FormButton type="submit">Send</FormButton>
      </ContactForm>
    </SectionWrapper>
  );
};

export default Contact;
