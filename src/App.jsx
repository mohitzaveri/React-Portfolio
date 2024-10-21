import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import Intro from "./components/Introduction/intro";
import Navbar from "./components/Navbar/Navbar";
import Productlist from "./components/ProductList/Productlist";
import Skills from "./components/Skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experiance />
      <Skills />
      <Productlist />
      <Contact />
    </div>
  );
}

export default App;
