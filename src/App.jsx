import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Pokemons from "./pages/Pokemons/Pokemons";
import Types from "./pages/Types/Types";
import Pokemon from "./pages/Pokemon/Pokemon";
import Type from "./pages/Type/Type";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/types" element={<Types />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        <Route path="/type/:type" element={<Type />} />
      </Routes>
    </Router>
  );
}

export default App;
