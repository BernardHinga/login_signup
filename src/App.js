import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./login";
import Signup from "./signup";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
