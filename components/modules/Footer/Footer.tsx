import React from 'react';
import FooterTop from "@/components/elements/Footer/FooterTop";
import FooterBottom from "@/components/elements/Footer/FooterBottom";

const Footer = () => {
  return (
    <footer className={'bg-[#2D2D2D]'}>
      <div>
        <FooterTop/>
        <FooterBottom/>
      </div>
    </footer>

  );
};

export default Footer;
