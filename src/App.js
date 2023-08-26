import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Codingame from "./components/Codingame";
import Work from "./components/Work";
import Skills from "./components/Skills";
import { Route, Routes } from "react-router-dom"
import ReactGA from "react-ga4";
// https://blog.webdevsimplified.com/2022-07/react-router/

ReactGA.initialize("G-XC2GF6ZMKT");

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/codingame" element={<Codingame />} />
				<Route path="/work" element={<Work />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/*" element={<Home />} />
			</Routes>
		</div>
	)
  // return (
	//   <div>
	// 	<Navbar />
	// 	<Home />
	// 	<About />
	// 	<Portfolio />
	// 	<Codingame />
	// 	<Skills />
	//   </div>
  // );
}

export default App;
