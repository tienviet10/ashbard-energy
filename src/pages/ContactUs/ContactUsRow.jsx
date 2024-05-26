import React from "react";
import ContactUsCard from "./ContactUsCard";

const ContactUsRow = () => {
  return (
    <>
      <ContactUsCard
        icon="/img/address.svg"
        title="Address"
        description1="4 City Scape Dr,"
        description2="Calgary, TOE 3P4"
      />
      <ContactUsCard
        icon="/img/phone.svg"
        title="Phone"
        description1="+1 (000) 000 0000"
        description2="+1 (000) 000 0000"
      />
      <ContactUsCard
        icon="/img/email.svg"
        title="Email"
        description1="info@ashbardenergy.com"
        description2="sales@ashbardenergy.com"
      />
    </>
  );
};

export default ContactUsRow;
