import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Header from "./Components/Header/Header";
import CreateBoardButton from "./Components/CreateBoardButton/CreateBoardButton";
// import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <SubNavBar />
      <CreateBoardButton />
      <Footer />
      {/* <NotFound /> */}
    </>
  );
};

export default App;
