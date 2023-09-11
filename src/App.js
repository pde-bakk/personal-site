import "./App.css";

import ReactGA from "react-ga4";
import {Route, Routes} from "react-router-dom";

import About from "./components/About";
import Codingame from "./components/Codingame";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Work from "./components/Work";

// https://blog.webdevsimplified.com/2022-07/react-router/

ReactGA.initialize("G-XC2GF6ZMKT");

function App() {
        return (
		<div>
			<Navbar/>
			<Routes>
				<Route path="/" element={
    <Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/about" element={
    <About/>}/>
				<Route path="/portfolio" element={<Portfolio/>}/>
				<Route path="/codingame" element={
    <Codingame/>}/>
				<Route path="/work" element={<Work/>}/>
				<Route path="/skills" element={
    <Skills/>}/>
				<Route path="/*" element={<Home/>}/>
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
