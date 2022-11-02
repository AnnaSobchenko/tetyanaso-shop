import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={`${s.hero} container`}>
      <h2 className="visually-hidden">TetyanaSo</h2>
      <div className={s.hero__texts}>
        <p className={s.hero__textname}>
          Hi! <br /> I'm TetyanaSo <br /> ¯ \ _ (ツ) _ / ¯ <br />
        </p>
        <p className={s.hero__text}>
          This is the shop, where you can see and buy my arts. Or if you want I
          would like to create something special for you
        </p>
      </div>
      <img
        src={require(`../../images/arts/hero.png`)}
        alt="It's me"
        // width="250px"
        // height="auto"
      />
    </div>
  );
};

export default Hero;
