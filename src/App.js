import Navbar from "./components/NavBar/navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Education from "./components/Education/education";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Education/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
