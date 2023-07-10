import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Resume from './resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
