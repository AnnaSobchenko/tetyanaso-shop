import { useState } from "react";
import CardArt from "../CardArt/CardArt";
import Modal from "../Modal/Modal";
import s from "./Gallery.module.scss";
const uuid = require("uuid");

const Gallery = ({ arts }) => {
  const [num, setNum] = useState(6);
  const [isBtnMore, setIsBtnMore] = useState(true);
  const [isBtnLess, setIsBtnLess] = useState(false);
  let renderArts = [];
  for (let i = 0; i < num; i++) {
    renderArts.push(arts[i]);
  }

  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  const changeNumPlus = () => {
    let diff = arts.length - num;
    if (diff > 6) {
      setNum((prev) => prev + 6);
      setIsBtnLess(true);
    } else if (diff <= 6) {
      setNum(arts.length);
      setIsBtnMore(false);
    }
  };
  const changeNumMinus = () => {
    let diff = renderArts.length - 6;
    if (diff > 6) {
      setNum((prev) => prev - 6);
      setIsBtnLess(true);
    } else if (diff <= 6) {
      setNum(6);
      setIsBtnMore(true);
      setIsBtnLess(false);
    }
  };

  const openModal = (artInfo) => {
    setModal({
      open: true,
      artInfo,
    });
  };

  const closeModal = () => {
    setModal({
      open: false,
      content: null,
    });
  };
  const handleOpenModal = (e) => {
    const id = e.currentTarget.id;
    const artInfo = arts.find((el) => el.id === id);
    openModal(artInfo);
  };

  return (
    <div className={s.gallery}>
      <div className="container" id="gallery">
        <h2 className="visually-hidden">Gallery</h2>
        <ul className={s.gallery__list}>
          {renderArts.map((art) => {
            return (
              <li
                className={s.gallery__item}
                key={uuid.v4()}
                id={art.id}
                onClick={(e) => handleOpenModal(e)}
              >
                <img
                  src={require(`../../images/arts/${art.img}`)}
                  alt={art.title}
                  width="100%"
                  height="auto"
                />
                <div className={s.gallery__wrap}>
                  <div className={s.gallery__wraptext}>
                    <p className={s.gallery__text}>{art.describe}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        {isBtnLess && (
          <button
            type="button"
            onClick={() => changeNumMinus()}
            className={`btn btn-outline-success ${s.gallery__btn_less}`}
          >
            Load less &nbsp; &#8679;
          </button>
        )}
        {isBtnMore && (
          <button
            type="button"
            onClick={() => changeNumPlus()}
            className={`btn btn-outline-success ${s.gallery__btn_more}`}
          >
            Load more &nbsp; &#8681;
          </button>
        )}
        {modal.open && (
          <Modal handleClose={closeModal} checker={true}>
            <CardArt artInfo={modal.artInfo} closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Gallery;
