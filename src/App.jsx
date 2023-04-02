import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="./experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router >
  );
}


export default App;