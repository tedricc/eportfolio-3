import React from "react";
import FooterLogo from "../assets/footer-logo.svg";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a href="">Github</a>
        </div>
        <div>
          <a href="">LinkedIn</a>
        </div>
        <div>
          <a href="">Email</a>
        </div>
        <div>
          <a href="">Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2022 David Bragg</div>
    </div>
  );
};

export default Footer;
