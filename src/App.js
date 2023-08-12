import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./Components/Header";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Container } from "react-bootstrap";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          
            <Route path="/Education" element={<Education/>} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </>
  );
}

export default App;