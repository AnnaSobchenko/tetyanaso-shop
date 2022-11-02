import s from "./Services.module.scss";

const Services = () => {
  return (
    <div className={s.services}>
      <ul>
        <li>You can buy my art in the different sizes</li>
        <li>I like to make your fantasy avatars for games</li>
        <li>
          I can create art special for you - something fantasy or from your
          photo
        </li>
      </ul>
      <h3>Welcome!</h3>
    </div>
  );
};

export default Services;
