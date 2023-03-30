import React from 'react';
// import NavbarTwo from '../components/_App/NavbarTwo';
import GoogleMap from '../components/Contact/GoogleMap';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/_App/Footer';

const Contact = () => {
  return (
    <>
      {/* <NavbarTwo /> */}

      <GoogleMap />

      <ContactInfo />

      <ContactForm />
      
      <Footer bgColor="bg-f9f9f9"/>
    </>
  );
};

export default Contact;
