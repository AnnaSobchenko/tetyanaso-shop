import "./App.scss";
import Footer from "./Components/Footer/Footer";
import AppBar from "./Components/AppBar/AppBar";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </Suspense>
        <Footer />
    </div>
  );
}

export default App;
