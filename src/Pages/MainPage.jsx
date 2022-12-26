import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contacts from "../Components/Contacts/Contacts";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
// import { addArtsApi, getArtsApi } from "../fetchApi";
import { getArts } from "../redux/products/productsOperations";
import s from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArts());
  }, []);

  return (
    <div className={s.mainpage}>
      <Hero />
      <Gallery />
      <Services />
      <Contacts />
    </div>
  );
};

export default MainPage;
