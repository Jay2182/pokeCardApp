import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Footer } from "./Components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <Header name="pokecards" />
            <Routes>
                <Route path="/pokeCardApp" element={<Home />} />
                <Route path="/pokeCardApp/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
