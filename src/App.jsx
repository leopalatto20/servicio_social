import React from "react";
import NavBar from "@/components/navBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Principles />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
