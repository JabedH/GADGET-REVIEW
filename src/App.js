import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Reviews from "./Components/Reviews/Reviews";
import DashBoard from "./Components/DashBoard/DashBoard";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
