import React from "react";
import './App.css'
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import BigAnimation from './components/BigAnimation';
import BottomGrid from "./components/BottomGrid";
import Hero from "./components/Hero";


import { BrowserRouter as Router } from "react-router-dom";

import { motion } from  'framer-motion'; 

const App = () => {
  return(
    <>
    <Router>
      <Header/>
      <AnimRoutes/>
    </Router>
    
    </>
  );

};

export default App;