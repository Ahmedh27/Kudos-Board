import React, {useState, useEffect} from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Header from "./Components/Header/Header";
import CreateBoardButton from "./Components/CreateBoardButton/CreateBoardButton";
// import NotFound from "./Components/NotFound/NotFound";

const App = () => {

  const [isFetching, setIsFetching] = useState(false);
  const [boards,setBoards] = useState([]);
  const baseUrl = "http://localhost:3000";


  useEffect(() => {
    
    const fetchBoards = async () => {
      setIsFetching(true);
      try{
        const response = await axios.get(`${baseUrl}/boards`);
        const data = response.data;
        setBoards(data);
      } catch(error) {
        console.error("error: fetching product", error);
      }finally{
        setIsFetching(false);
      }
    }
    fetchBoards();
    },[])

  
  
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
