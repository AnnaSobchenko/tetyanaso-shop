import s from "./CardArt.module.scss";
import Icons from "../../images/symbol-defs.svg";

const CartArt = ({ artInfo, closeModal }) => {
  return (
    <div className={s.cardart}>
     <div className={s.cardart__artbox}>
     <img
        src={require(`../../images/arts/${artInfo.img}`)}
        alt={artInfo.title}
        // width="500"
      />
     </div>
      <div className={s.cardart__paybtn}>
        <label htmlFor="mainButton" className={s.cardart__lbl}>
          Price {artInfo.price}$
        </label>
        <button id="mainButton" className="btn btn-success rsWidgetButton">
          <svg className={s.cardart__icon} width="45px" height="20px">
            <use xlinkHref={`${Icons}#icon-cart`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartArt;
