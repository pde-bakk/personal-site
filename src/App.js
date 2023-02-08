import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Codingame from "./components/Codingame";
import Skills from "./components/Skills";

function App() {
  return (
	  <div>
		<Navbar />
		<Home />
		<About />
		<Portfolio />
		<Codingame />
		<Skills />
	  </div>
  );
}

export default App;
