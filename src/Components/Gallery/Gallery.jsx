import { useState } from "react";
import CardArt from "../CardArt/CardArt";
import Modal from "../Modal/Modal";
import s from "./Gallery.module.scss";
const uuid = require("uuid");


const Gallery = ({ arts }) => {
  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

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
          {arts.map((art) => {
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