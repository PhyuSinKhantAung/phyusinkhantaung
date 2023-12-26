'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
  return (
    <div className="md:max-w-[80%] mx-auto p-2 my-5 md:flex items-center">
      <TypeAnimation
        sequence={[`Let's get in touch !`, 1000]}
        wrapper="span"
        speed={20}
        style={{ fontSize: '3em', display: 'inline-block', fontWeight: 700 }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Contact;
