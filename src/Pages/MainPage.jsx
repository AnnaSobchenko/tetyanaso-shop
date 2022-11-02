import Contacts from "../Components/Contacts/Contacts";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import s from "./MainPage.module.scss";
const arts = require("../data.json");

const MainPage = () => {
  return (
    <div className={s.mainpage}>
      <Hero />
      {/* <button id="mainButton" className="rsWidgetButton">
        Pay $20.00
      </button> */}
      <Gallery arts={arts} />
      <Services />
      <Contacts />
    </div>
  );
};

export default MainPage;
