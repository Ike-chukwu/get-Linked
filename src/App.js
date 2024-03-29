import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import RegisterContent from "./components/RegisterContent/RegisterContent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterContent />} />
      </Routes>
    </div>
  );
}

export default App;
