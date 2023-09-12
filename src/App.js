import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieDetails from "./Components/MovieDetails";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Watchlist from "./Components/Watchlist";
import Sidebar from "./Components/Sidebar";


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Sidebar/>}/>
          <Route path="/Top_rated" element={<MovieDetails/>} />
          <Route path="/watchlist" element={<Watchlist/>}/>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
