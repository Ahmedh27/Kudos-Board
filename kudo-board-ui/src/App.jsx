import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import SubNavBar from "./Components/SubNavBar/SubNavBar";

const App = () => {
  return (
    <>
      <Header />
      <Footer />
      <NotFound />
      <SubNavBar />
    </>
  );
};

export default App;
