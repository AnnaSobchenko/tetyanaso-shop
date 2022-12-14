import { Outlet } from "react-router-dom";
import MediaQuery from "react-responsive";
import s from "./AppBar.module.scss";
import Icons from "../../images/symbol-defs.svg";

const Logo = require("../../images/logo.png");

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <div className={`container  ${s.header__menu}`}>
          <div className={s.header__logo}>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <ul className={`nav nav-tabs`}>
            <MediaQuery minWidth={768}>
              <li className={s.header__item}>
                <a className={s.header__link} href="/#gallery">
                  Gallery
                </a>
              </li>
            </MediaQuery>
            <li className={s.header__item}>
              <a className={s.header__link} href="/#services">
                Services
              </a>
            </li>
            <MediaQuery minWidth={768}>
              <li className={s.header__item}>
                <a className={s.header__link} href="/#contacts">
                  Contacts
                </a>
              </li>
            </MediaQuery>
          </ul>
          <svg className={s.header__icon} width="45px" height="20px">
            <use xlinkHref={`${Icons}#icon-cart`} />
          </svg>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
