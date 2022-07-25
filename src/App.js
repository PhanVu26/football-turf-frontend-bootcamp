import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TurfDetail from "./components/TurfDetails/TurfDetail";
import MapBox from "./components/MapBox/mapBox";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        {/* <Toolbar></Toolbar> */}
        <div className="">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/turfs/:turfId" element={<TurfDetail />}></Route>
            <Route path="/maps" element={<MapBox  />}></Route>

            {/* <Route
            path="/cv-builder"
            element={<Register allUsers={allUsers} />}
          ></Route> */}
          </Routes>
        </div>
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
