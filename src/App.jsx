import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ModalOracao from './components/ModalOracao';
import Home from './pages/Home';
import About from './pages/About';
import Ministerios from './pages/Ministerios';
import Escala from './pages/Escala';
import Transparencia from './pages/Transparencia';
import './styles/globals.css';

const PageWrapper = ({ children }) => {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease' }}>
      {children}
    </div>
  );
};

const App = () => {
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar onPrayerClick={() => setIsPrayerModalOpen(true)} />
        
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home onPrayerClick={() => setIsPrayerModalOpen(true)} />
                  </PageWrapper>
                }
              />
              <Route
                path="/sobre"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/ministerios"
                element={
                  <PageWrapper>
                    <Ministerios />
                  </PageWrapper>
                }
              />
              <Route
                path="/escala"
                element={
                  <PageWrapper>
                    <Escala />
                  </PageWrapper>
                }
              />
              <Route
                path="/transparencia"
                element={
                  <PageWrapper>
                    <Transparencia />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        
        <ModalOracao
          isOpen={isPrayerModalOpen}
          onClose={() => setIsPrayerModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
