import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  ));
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;