import { Oval } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.spinLoader}>
          <Oval color="#9b7c28" height={100} width={100} />;
        </div>
      );
}
 
export default Loader;