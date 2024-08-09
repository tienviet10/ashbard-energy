import React from "react";
import ContactUsCard from "./ContactUsCard";

const ContactUsRow = () => {
  return (
    <>
      <ContactUsCard
        icon="/img/address.svg"
        title="Address"
        description1="4 Cityscape Dr NE,"
        description2="Calgary, TOE 3P4"
      />
      <ContactUsCard
        icon="/img/phone.svg"
        title="Phone"
        description1="+1 (289) 788 0066"
        description2="+1 (306) 850 7962"
      />
      <ContactUsCard
        icon="/img/email.svg"
        title="Email"
        description1="info@ashbardenergy.com"
        // description2="sales@ashbardenergy.com"
      />
    </>
  );
};

export default ContactUsRow;
