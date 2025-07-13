import NavBar from "@/components/navBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import Orgs from "@/components/Orgs";
import Carrousel from "@/components/Carrousel";
import Contact from "@/components/Contact";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Principles />
      <Video />
      <Orgs />
      <Carrousel />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
