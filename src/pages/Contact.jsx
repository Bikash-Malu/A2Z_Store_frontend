import Base from "../components/Base";
import { contactForm } from "./HomePageComponents";
import React from 'react'
const Contact = () => {
  return (
    <Base title="Electro Store / Contact Us" description={null}>
      <div className="my-5">{contactForm()}</div>
    </Base>
  );
};
export default Contact;
