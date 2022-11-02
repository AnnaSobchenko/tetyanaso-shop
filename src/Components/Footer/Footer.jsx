import s from "./Footer.module.scss";

const Logo = require("../../images/logo.png");

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__logo}>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className={s.footer__allright}>
        <p>© 2022 | All Rights Reserved |&nbsp;</p>
        <p>
          Lorem ipsum
          <span className={s.footer__heart}> ❤ </span> &zwnj;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
