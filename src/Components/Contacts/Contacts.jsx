import s from "./Contacts.module.scss";
import Icons from "../../images/symbol-defs.svg";

const Contacts = () => {
  return (
    <div className={`container ${s.contacts}`} id="contacts">
      <h2>Contacts</h2>

      <div className={s.contacts__links}>
        <a
          className={s.contacts__icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/HannaSobchenko"
        >
          
          <p>Telegram</p>
        </a>
        <a
          className={s.contacts__icon}
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/TetyanaSo/"
        >
          <svg className={s.contacts__icon} width="35px" height="35px">
            <use xlinkHref={`${Icons}#icon-instagram`} />
          </svg>
          <p>Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
