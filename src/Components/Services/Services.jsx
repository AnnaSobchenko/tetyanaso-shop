import s from "./Services.module.scss";

const Services = () => {
  return (
    <div className={`${s.services}  container `} id="services">
      <ul>
        <li className={s.services__item}>
          You can buy my art in the different sizes
        </li>
        <li className={s.services__item}>
          I like to make your fantasy avatars for games
        </li>
        <li className={s.services__item}>
          I can create art special for you - something fantasy or from your
          photo
        </li>
      </ul>
      <h3 className={s.services__title}>Welcome!</h3>
    </div>
  );
};

export default Services;
