// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";
import CharactersId from "./pages/CharacterId";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/character/:characterId" element={<CharactersId />} />
      </Routes>
    </Router>
  );
}

export default App;
