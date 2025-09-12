import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // 폴더 대소문자 주의!

// import Footer from "./Components/Footer/Footer"; // Footer 파일이 있을 때만 사용

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
export default App;
