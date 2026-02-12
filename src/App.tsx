import ReactGA from "react-ga4";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
