import React from "react";
import FooterLogo from "../assets/footer-logo.svg";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      {/* <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a> */}
      <div className="footer__link--wrapper">
        <div>
          <a
            target="_blank"
            rel="no-refferer"
            href="https://github.com/tedricc"
          >
            Github
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="no-refferer"
            href="https://www.linkedin.com/in/tedric-chow/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="no-refferer"
            href="https://github.com/tedricc/eportfolio-3/blob/main/src/assets/Resume__Tedric--2024.pdf"
          >
            Resume
          </a>
        </div>
      </div>
      <div>Copyright &copy; 2024 Tedric Chow</div>
    </div>
  );
};

export default Footer;
