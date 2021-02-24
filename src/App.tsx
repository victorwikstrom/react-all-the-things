import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import sections from "./components/sections";
import { routes } from "./components/Navigation/routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
