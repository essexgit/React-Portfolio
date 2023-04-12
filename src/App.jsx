import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Experience from './pages/Experience/Experience';
import Contact, { contactAction } from './pages/Contact/Contact';
import Layout from './components/Layout/Layout';
// import { motion } from "framer-motion";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="experience" element={<Experience />} />
      <Route path="contact" element={<Contact />} action={contactAction} />
    </Route>
  ));
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;