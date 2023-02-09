import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Codingame from "./components/Codingame";
import Skills from "./components/Skills";
import { Route, Routes } from "react-router-dom"
// https://blog.webdevsimplified.com/2022-07/react-router/


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
				<Route path="/skills" element={<Skills />} />
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
