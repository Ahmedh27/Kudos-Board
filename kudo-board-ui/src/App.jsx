import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Header from "./Components/Header/Header";
import CreateBoardButton from "./Components/CreateBoardButton/CreateBoardButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getBoards } from "./Components/Service/boardAPI";

  

const App = () => {

  const [isFetching, setIsFetching] = useState(false);
  const [boards,setBoards] = useState([]);


  useEffect(() => {
    
    const fetchBoards = async () => {
      setIsFetching(true);
      try{
        const boardsData = await getBoards();
        setBoards(boardsData);
      } catch(error) {
        console.error("error: fetching product", error);
      }
    }
    fetchBoards();
    },[])

  
  
  return (
    <>

      <Header />
      <SubNavBar />
      <CreateBoardButton />

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div>
          {boards.map((board) => (
            <div key={board.id}>
              <h3>{board.name}</h3>
              <p>{board.description}</p>
            </div>
          ))}
        </div>
      )}

      <Footer />
      {/* <NotFound /> */}
    </>
  );
};

export default App;
