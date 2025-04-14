import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header"; // Import your header
import Home from "./pages/home"; // Create these components for each route
import Services from './pages/services';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
